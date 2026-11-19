## Grupo Primo — acervo antes de perguntar
- Antes de perguntar ao time algo que pode estar documentado (decisão de arquitetura, dono de um serviço, padrão do grupo, material de projeto), consulte a skill `primo-contexto`. Use a resposta com a fonte citada e pergunte só o que o acervo não cobre.
- Material do realm `projetos` é não homologado: use, cite como tal e peça confirmação.

## Grupo Primo — tech radar
- Toda tecnologia, biblioteca ou serviço novo é conferido no tech radar (`~/.primo/policies/tech-radar.md`, também no Aether).
- `adopt` ou `trial`: segue. `assess`: fale com a Plataforma antes de seguir. `hold` ou fora do radar: só com exceção registrada em ADR, com a alternativa do radar.

## Grupo Primo — segurança
- Siga a skill `primo-seguranca` em toda etapa: secret nunca entra em código, commit, artefato ou contexto.
- Mudança em IaC, autenticação ou pagamentos pede revisor humano no PR.

## Grupo Primo — skills transformadoras dentro do workflow
- Quando uma etapa pede `primo-ambientes`, `primo-iac-terraform`, `primo-auth`, `primo-ci-pipeline` ou `primo-catalog-info`, o diagnóstico e o plano da skill entram nos artefatos da etapa, não em `docs/adopt/`. A skill não pausa: a aprovação da etapa é a aprovação do plano.
- A aplicação do plano (Fase 2 da skill) entra como itens do plano da `code-generation`. Na etapa `ci-pipeline`, que vem depois, o plano entra como pergunta de aprovação da própria etapa e é aplicado quando ela gera os artefatos.
