# TREINO MAX — versão integrada para teste no GitHub Pages

## Publicação segura

1. Envie o conteúdo desta pasta para uma pasta `treino-max-v32/` no repositório GitHub, mantendo `index.html` dentro dela.
2. Abra `https://gdmoraes.github.io/meu-treino-ia/treino-max-v32/`.
3. Não substitua a raiz do repositório nem o código conectado ao Supabase antes da migração e testes.

## Fluxo corrigido

Cadastro demonstrativo → avaliação em 5 etapas → revisar respostas → CRIAR MEU TREINO → Home.
Não há botão externo capaz de pular a avaliação. Usuário com avaliação completa salva localmente retorna à Home no próximo login demonstrativo. Avatar único abre Meu Perfil após avaliação.

## Limitações importantes

Esta é a integração completa dos protótipos de interface. **Não implementa autenticação real ou persistência em Supabase.** Dados ficam no localStorage do navegador; não use senhas reais. A recuperação por celular é demonstrativa. Não publicar como serviço final para usuários reais. O gerador de treino deve ser validado por profissional de educação física antes do lançamento.

## Verificação

Verificação de sintaxe JS via Node; teste de navegação real ainda requerido.
