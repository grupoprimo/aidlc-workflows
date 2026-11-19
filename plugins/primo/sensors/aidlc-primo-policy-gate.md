---
id: primo-policy-gate
kind: deterministic
command: bun {{HARNESS_DIR}}/tools/aidlc-sensor-primo-policy-gate.ts
default_severity: advisory
description: Roda o checker de compliance do Grupo Primo (PRIMO-CATALOG, PRIMO-LOG, PRIMO-WATCH) quando o resumo de build-and-test é gravado (plugin primo, advisory)
category: compliance
matches: "**/{aidlc-docs,intents}/**"
input_schema:
  output_path: string
  stage_slug: string
output_schema:
  pass: boolean
  findings_count: integer
  warn_count: integer
  services: integer
  fails: array
timeout_seconds: 120
---

# primo-policy-gate sensor (primo)

ADVISORY. Quando `build-and-test-summary.md` é gravado, roda o mesmo checker da
esteira (`platform-shared-workflows`, `python -m compliance`) sobre cada
`catalog-info.yaml` do projeto (na raiz ou nos repos do workspace) e reporta os
FAIL. Qualquer outra gravação passa sem rodar nada.

O checker não é baixado pelo sensor: a skill `primo-policy-gate` o clona em
`.primo-central/` (Step 1). Sem o checker, sem `python3` ou sem as dependências
dele, o sensor sai como ferramenta indisponível, não como achado.

## Advisory note

O AI-DLC ainda não tem severidade bloqueante para sensor: um FAIL aqui é
reportado no gate da etapa, não impede a aprovação. Quem bloqueia é o
`primo-policy-gate` da esteira.
