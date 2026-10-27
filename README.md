# Meu Treino IA — PWA v12

Projeto demonstrativo baseado integralmente no protótipo v11, preservando suas 50 imagens embutidas, biblioteca, Full Body, divisão ABCD, troca de exercícios, registro de séries/carga, progressão, agenda e cronômetro.

## Arquivos
- `index.html`: interface principal
- `styles.css`: identidade azul-marinho e responsividade
- `app.js`: lógica e 50 imagens incorporadas como dados locais
- `manifest.webmanifest`: metadados de instalação
- `service-worker.js`: cache offline dos arquivos do aplicativo
- `icons/`: ícones de instalação Android e Apple

## Testar localmente
No diretório do projeto, use `python -m http.server 8000` e abra `http://localhost:8000`.
Não abra o `index.html` via `file://`: o service worker só funciona em origens seguras (localhost ou HTTPS).

## Instalar no Android
Hospede a pasta inteira em um servidor HTTPS (ex.: GitHub Pages, Netlify ou Vercel). Abra o endereço no Chrome Android e escolha no menu `Instalar app` ou `Adicionar à tela inicial`. A apresentação da opção depende do navegador/dispositivo. Não é um APK e não está publicado na Play Store.

## Armazenamento e segurança
Os registros permanecem em `localStorage` do dispositivo/navegador. Não existem conta, login real, backup ou sincronização. Limpar dados do navegador pode apagar o histórico.
A prescrição é **demonstrativa**, não substitui avaliação de profissional de Educação Física. A segurança e exatidão de cada ilustração deverão ser revisadas antes de um lançamento público.

## Manutenção
Em novas versões, atualize `CACHE_NAME` no service worker para forçar atualização do cache de arquivos.

## Publicação via GitHub Pages
1. Crie um repositório novo chamado `meu-treino-ia`, sem arquivos iniciais, na sua conta GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório (não o arquivo ZIP sozinho).
3. Em Settings > Pages > Build and deployment, escolha **GitHub Actions**.
4. A ação `.github/workflows/deploy.yml` publicará automaticamente em HTTPS quando os arquivos forem enviados para `main`.
5. Aguarde o status verde na aba Actions e abra o URL divulgado em Settings > Pages.

**Antes de distribuir:** este é um protótipo; as orientações e imagens precisam de revisão por profissional habilitado.
