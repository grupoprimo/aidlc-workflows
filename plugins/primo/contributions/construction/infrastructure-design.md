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
  Defina ambientes e naming com a skill `primo-ambientes` e depois a infra com
  `primo-iac-terraform`: o diagnóstico, o plano e o custo mensal entram nos
  artefatos desta etapa. O `.tf` fica para a `code-generation`.
