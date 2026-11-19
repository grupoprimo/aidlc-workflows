---
target: ci-pipeline
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): Esteira padrão
A esteira é a padrão do grupo: use a skill `primo-ci-pipeline` (workflows
caller dos reusables de `grupoprimo/platform-shared-workflows`). O plano da
skill entra como pergunta de aprovação no Step 2 e os workflows são escritos no
Step 4, depois da resposta. Componente novo também precisa do
`catalog-info.yaml` pela skill `primo-catalog-info`, do mesmo jeito.
