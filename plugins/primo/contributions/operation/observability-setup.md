---
target: observability-setup
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): Observabilidade no padrão do grupo
- Serviço que já roda: comece pela skill `primo-sre-assessment` (AS-IS × TO-BE
  pelo Datadog).
- Monitores e Synthetic saem da skill `primo-watch-monitors`, que escreve
  `.datadog/`; quem aplica no Datadog é a esteira.
- Confira o piso do PRIMO-WATCH com `primo-policy-gate`.
