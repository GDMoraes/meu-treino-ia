# Meu Treino IA Premium V20 — teste autenticado

- Publicar SOMENTE em `premium-v20/index.html` no GitHub Pages, sem substituir o `index.html` principal.
- Abrir `https://gdmoraes.github.io/meu-treino-ia/premium-v20/`.
- Em Supabase > Authentication > URL Configuration, adicionar em Redirect URLs: `https://gdmoraes.github.io/meu-treino-ia/premium-v20/**` (preservar os URLs já existentes).
- A tela de login aparece antes da avaliação. Os dados do Premium são guardados na tabela `workout_plans` usando título próprio `Meu Treino IA Premium V20`, sem sobrescrever a ficha antiga.
- Após entrar pela primeira vez, responder a avaliação, gerar ficha e registrar cargas. Testar sair e entrar, outro navegador, isolamento entre duas contas.
- Recursos ainda em teste: recuperação de senha, gatilho de salvamento e tratamento de atualizações simultâneas. Não publicar amplamente sem testes de segurança e validação profissional.
- Este projeto pode abrir como arquivo local para prévia, mas login exige servidor HTTPS e a URL de redirecionamento.
