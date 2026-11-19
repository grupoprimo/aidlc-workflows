---
target: infrastructure-design
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: in:Constraints
    order: 100
---
## fragment: in:Constraints
- **(primo)** Infraestrutura usa só módulos de `grupoprimo/terraform-modules`.
  Use `primo-ambientes` e depois `primo-iac-terraform` em modo AI-DLC: o
  diagnóstico, o plano e o custo mensal entram nos artefatos desta etapa, a
  skill não pausa e a aprovação desta etapa é a aprovação do plano. O apply
  fica para a `code-generation`.
