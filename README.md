# Meu Treino IA — Versão 13.0 (Supabase)

## Publicar no GitHub Pages

Envie o CONTEÚDO desta pasta diretamente à raiz do repositório `GDMoraes/meu-treino-ia` (não envie a pasta contêiner). Substitua `index.html`, `app.js`, `styles.css`, `service-worker.js`, `manifest.webmanifest`, além dos ícones. Acrescente `cloud.js`. Mantenha a configuração Pages `main` / `(root)`.

## Recursos

- 50 exercícios ilustrados e fichas Full Body / ABCD originais
- Criar conta, login, confirmação por e-mail (configurada no Supabase) e recuperação de senha
- Salvar e restaurar **ficha, histórico demonstrativo e registros** no campo `plan_data` de `workout_plans`, com RLS
- Exportar dados e exclusão completa da conta **ainda não implementados**
- Dados `mtia-custom-v9` existentes no navegador podem permanecer; ao primeiro login, se a conta não tiver ficha, o estado atual é enviado à nuvem.

## Supabase

URL do projeto e chave pública (`sb_publishable_...`) estão em `cloud.js`. **Nunca adicione chaves `service_role` ou `secret` ao código.** As tabelas devem ter RLS, privilégios e políticas por `auth.uid()` conforme o SQL v13. Configure a URL do aplicativo em Authentication > URL Configuration e confirme o provedor Email.

## Limitações e próximos testes

Esta é uma **integração beta** que salva o estado da ficha e os registros no `workout_plans.plan_data`. As tabelas `set_logs`, `workout_sessions` e `progress_measurements` ainda não são utilizadas individualmente. O histórico em múltiplos dispositivos deve ser testado. Não existe resolução automática de conflitos: a última gravação vence. Teste autenticação, confirmação, recuperação de senha e isolamento de duas contas antes de lançar ao público.

Confirme também que o aplicativo não fornece automaticamente treino irrestrito para pessoas com lesões ou sintomas. As imagens e regras devem ser validadas por profissional de Educação Física.
