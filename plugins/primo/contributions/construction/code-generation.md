---
target: code-generation
plugin: primo
adds:
  scopes:
    - primo-feature
    - primo-change
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): O que entra no plano
- Em repo do scaffold, módulo, use-case e apresentação novos saem dos
  geradores Plop (skill `primo-arquitetura`), não de arquivo escrito à mão.
- Se `infrastructure-design` ou `nfr-design` aprovaram plano de
  `primo-iac-terraform` ou `primo-auth`, a aplicação desse plano entra como
  itens deste plano.
- Dependência nova passa pelo tech radar antes de entrar no plano.
