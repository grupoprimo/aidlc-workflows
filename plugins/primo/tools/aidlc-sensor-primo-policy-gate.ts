// aidlc-sensor-primo-policy-gate.ts — ADVISORY policy-gate sensor (primo plugin).
//
// Runs the Grupo Primo compliance checker (PRIMO-CATALOG / PRIMO-LOG /
// PRIMO-WATCH) over the project when build-and-test writes its summary, and
// reports the FAIL findings. The checker is the one CI runs; this sensor does
// not fetch it. The primo-policy-gate skill clones it into `.primo-central/`
// (its Step 1), which the build-and-test contribution asks for before the
// summary. With no checker or no Python, the sensor exits 127, which the
// dispatcher records as tool-unavailable instead of a finding.
//
// Self-contained: a plugin tool ships in its own delta and must not import a
// core tool.
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";

const TRIGGER = "build-and-test-summary.md";
const CHECKER_DIR = join(".primo-central", ".github", "scripts");
const SKIP = new Set(["node_modules", "dist", "build", "out", "coverage", "venv"]);

interface Finding {
  severity?: string;
  rule_id?: string;
  service?: string;
  file?: string;
  line?: number;
  message?: string;
}

function parseFlags(argv: string[]): { outputPath?: string } {
  const out: { outputPath?: string } = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--output-path") out.outputPath = argv[++i];
  }
  return out;
}

function emit(result: Record<string, unknown>): never {
  process.stdout.write(`${JSON.stringify(result)}\n`);
  process.exit(0);
}

function unavailable(reason: string): never {
  process.stderr.write(`aidlc-sensor-primo-policy-gate: ${reason}\n`);
  process.exit(127);
}

function isDir(path: string): boolean {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

// A single repo has catalog-info.yaml at the root; a team workspace has one
// per repo, one or two levels down (repos may be symlinks, which statSync
// follows on purpose).
export function serviceRoots(projectDir: string, depth = 2): string[] {
  if (existsSync(join(projectDir, "catalog-info.yaml"))) return [projectDir];
  if (depth === 0) return [];
  const roots: string[] = [];
  let entries: string[] = [];
  try {
    entries = readdirSync(projectDir).sort();
  } catch {
    return roots;
  }
  for (const name of entries) {
    if (name.startsWith(".") || SKIP.has(name) || name === "aidlc") continue;
    const child = join(projectDir, name);
    if (isDir(child)) roots.push(...serviceRoots(child, depth - 1));
  }
  return roots;
}

export function main(argv: string[]): void {
  const { outputPath } = parseFlags(argv);
  if (!outputPath || basename(outputPath) !== TRIGGER) emit({ pass: true, findings_count: 0 });

  const projectDir = process.cwd();
  const checker = join(projectDir, CHECKER_DIR);
  if (!isDir(join(checker, "compliance"))) unavailable(`checker not found at ${CHECKER_DIR}`);
  // A repo reachable twice (a symlink beside its target) is checked once.
  const services = [...new Set(serviceRoots(projectDir).map((s) => realpathSync(s)))];
  if (services.length === 0) emit({ pass: true, findings_count: 0, services: 0 });

  const outDir = mkdtempSync(join(tmpdir(), "primo-policy-gate-"));
  try {
    const args = ["-m", "compliance", "--format", "json", "--out-dir", outDir, "--fail-on", "never"];
    for (const s of services) args.push("--service", s);
    const run = spawnSync("python3", args, {
      cwd: projectDir,
      encoding: "utf-8",
      env: { ...process.env, PYTHONPATH: checker },
    });
    if (run.error) unavailable(`python3 could not start: ${run.error.message}`);
    if (/ModuleNotFoundError/.test(run.stderr ?? "")) unavailable("checker dependencies missing (pyyaml, requests)");
    const report = join(outDir, "compliance-report.json");
    if (run.status !== 0 || !existsSync(report)) {
      process.stderr.write(run.stderr ?? "");
      process.exit(1);
    }
    const findings = JSON.parse(readFileSync(report, "utf-8")) as Finding[];
    const fails = findings.filter((f) => f.severity === "FAIL");
    const warns = findings.filter((f) => f.severity === "WARN");
    emit({
      pass: fails.length === 0,
      findings_count: fails.length,
      warn_count: warns.length,
      services: services.length,
      fails: fails.slice(0, 20).map((f) => `${f.rule_id} ${f.file}:${f.line} ${f.message}`),
    });
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

if (import.meta.main) main(process.argv.slice(2));
