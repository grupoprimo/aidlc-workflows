---
name: primo-change
plugin: primo
depth: Minimal
description: "Grupo Primo: mudança pequena — requisitos, código e build/test"
skeleton: off
review_cap: advisory
guard_policy: off
sensors: on
learnings: on
summary_confirmation: off
plan_approval: on
collaborators: off
---
# primo-change scope
Mudança pequena em componente existente, sem desenho novo.
## Why these stages, why skip those
Engenharia reversa (condicional, para código existente), requisitos, geração
de código e build/test. Sem unidades novas, sem
desenho funcional e sem infraestrutura: se a mudança pedir isso, use
`primo-feature`.
## Membership
Initialization, `reverse-engineering` (condicional), `requirements-analysis`,
`code-generation`, `build-and-test`. É o `bugfix` do core sem as etapas de
deploy, que no grupo são da esteira.
