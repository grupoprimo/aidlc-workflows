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
caller dos reusables de `grupoprimo/platform-shared-workflows`), com o plano
nos artefatos desta etapa. Componente novo também precisa do
`catalog-info.yaml` pela skill `primo-catalog-info`.
