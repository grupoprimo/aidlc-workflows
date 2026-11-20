---
target: feasibility
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): Integração externa
Se o intent depende de API de terceiro (adquirente, gateway, ERP, SaaS), use a
skill `primo-viabilidade-integracao`: cada requisito da integração vira chamada
real no sandbox, nunca só leitura da documentação. Requisito `NAO_CONFIRMADO`
impede recomendar a aprovação desta etapa, salvo decisão registrada do
engenheiro.
