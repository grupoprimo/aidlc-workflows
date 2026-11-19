---
target: nfr-design
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: in:Constraints
    order: 100
---
## fragment: in:Constraints
- **(primo)** Autenticação e autorização seguem a skill `primo-auth` (Keycloak;
  federação EntraID obrigatória para backoffice de funcionário). O desenho e as
  configs de import entram nos artefatos desta etapa; a aplicação fica para a
  `code-generation`. Tecnologia nova passa pelo tech radar.
