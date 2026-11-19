---
target: delivery-planning
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): Complexidade das stories
Meça cada story com a skill `primo-bcp` (BCP e maturidade INVEST) e use o
resultado para sequenciar as entregas. Story imatura volta para refinamento
antes de entrar no plano. BCP mede complexidade de negócio, não prazo.
