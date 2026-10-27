# Meu Treino IA V17 — avaliação e cargas livres

- Tela de avaliação após o primeiro login: idade, peso corporal, altura, objetivo, nível, divisão, dias disponíveis e dores/restrições.
- Aba Perfil para revisar respostas.
- Carga em kg digitada pelo usuário, independente por exercício e por série; as últimas entradas podem aparecer como sugestão editável.
- Histórico de cargas preservado ao editar a avaliação.
- Perfil e histórico incluídos no estado da ficha sincronizado na tabela workout_plans.plan_data via Supabase.
- Em caso de dor, ficha apenas demonstrativa até avaliação profissional.

## Publicação
Extraia e envie o conteúdo da pasta à raiz do repositório GitHub Pages, substituindo os arquivos antigos. Teste em janela anônima e com conta de teste.

## Atenção
Para contas antigas, o formulário aparecerá uma vez. Mudanças em divisão/dias geram nova ficha, mas não apagam o histórico de séries. O projeto ainda precisa de testes de autenticação, sincronização e proteção entre usuários antes de liberação pública.
