---
name: primo-feature
plugin: primo
depth: Minimal
testStrategy: Standard
description: "Grupo Primo: feature nova com o kit — classic + intent-capture, feasibility, ci-pipeline e observability-setup"
skeleton: off
review_cap: advisory
guard_policy: off
sensors: on
learnings: on
summary_confirmation: off
plan_approval: on
collaborators: off
---
# primo-feature scope
Escopo default dos projetos do Grupo Primo. Parte do `classic` (Inception e
Construction completas) e acrescenta a captura do intent, a viabilidade de
integração externa, a esteira e a observabilidade, que é onde entram as skills
do AI Platform Kit.
## Why these stages, why skip those
`intent-capture` abre o intent e é onde o retrato do Aether é montado.
`feasibility` valida integração externa antes de construir. `ci-pipeline` liga
a esteira padrão do grupo. `observability-setup` é condicional e coloca
monitores e SLOs no fluxo. O resto da Ideation e da Operation fica fora: o
deploy é feito pela esteira, não pelo workflow.
## Membership
Initialization, `intent-capture`, `feasibility`, todas as etapas da Inception,
a Construction até `build-and-test`, `ci-pipeline` e `observability-setup`.
