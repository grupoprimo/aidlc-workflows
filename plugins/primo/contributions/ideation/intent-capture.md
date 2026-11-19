---
target: intent-capture
plugin: primo
adds:
  scopes:
    - primo-feature
fragments:
  - anchor: before-step:2
    order: 100
---
## fragment: before-step:2
### Step 1a (primo): Retrato do acervo
Se o intent nasce de uma oportunidade (`oportunidade.md`), rode antes a skill
`primo-intake` para os domínios afetados e o dono do problema.

Depois, antes de gerar perguntas, use a skill `primo-contexto` para montar o
retrato do que o acervo da plataforma já diz sobre este intent: decisões de
arquitetura, ownership no catálogo, padrões do grupo e material de projetos.
Cada item cita a fonte. Item do realm `projetos` leva o rótulo **não
homologado**. Grave o retrato em `retrato-aether.md` no registro desta etapa e
registre-o na base de conhecimento com
`/aidlc knowledge onboard <arquivo> --intent`, para que as etapas da Inception o
leiam na pergunta `Q1`. Se o MCP do acervo não estiver conectado, diga isso em
uma linha e siga sem o retrato.
