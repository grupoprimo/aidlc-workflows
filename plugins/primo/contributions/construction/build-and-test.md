---
target: build-and-test
plugin: primo
adds:
  sensors:
    - primo-policy-gate
  scopes:
    - primo-feature
    - primo-change
fragments:
  - anchor: before-step:8
    order: 100
---
## fragment: before-step:8
### Step 7a (primo): Policy gate
Antes de escrever o resumo, rode a Fase 1 da skill `primo-policy-gate` (Steps
1 a 3: o checker fica em `.primo-central/`) e registre no resumo os FAIL e WARN
por regra. O sensor `primo-policy-gate` roda o mesmo checker quando o resumo é
gravado.
