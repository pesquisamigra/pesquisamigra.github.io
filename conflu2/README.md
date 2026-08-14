# Confluências — protótipo de interface

Protótipo estático do diretório de psicólogas e psicólogos. **Só HTML e CSS**, sem
back-end, sem build, sem dependência: basta abrir os arquivos no navegador.

Serve para alinhar design e navegação com outras pessoas **antes** de começar a programação.

## Páginas

| Arquivo | O que é |
|---|---|
| `index.html` | Home — quem somos, diretório, agenda, notícias, artigos, biblioteca |
| `diretorio.html` | Busca com mapa do Brasil e painel de profissionais no exterior |
| `perfil.html` | Página pública de um profissional |
| `artigo.html` | Leitura de artigo autoral |
| `noticia.html` | Leitura de notícia |
| `biblioteca.html` | Referências: textos e livros indicados pela rede |
| `agenda.html` | Eventos da rede |
| `login.html` | Entrar na conta |
| `cadastro.html` | Criar conta, com estados de erro demonstrados |
| `onboarding.html` | Escolha de participação: perfil, contribuição ou navegar |
| `checkout.html` | Pagamento da assinatura, com o rateio visível |
| `painel-perfil.html` | Edição do perfil profissional (área logada) |
| `admin.html` | Administração — visão geral, métricas e fila |
| `admin-perfis.html` | Moderação de perfis: fila + revisão + decisão |
| `admin-conteudos.html` | Moderação de conteúdos |
| `admin-usuarios.html` | Gestão de usuários |
| `admin-assinaturas.html` | Gestão de assinaturas |
| `admin-todos-conteudos.html` | Todas as publicações |
| `admin-configuracoes.html` | Parâmetros da plataforma |
| `sobre.html` | O movimento — princípios e compromissos |
| `apoie.html` | Contribuição voluntária |
| `referencia.html` · `evento.html` | Detalhe de referência e de evento |
| `recuperar-senha.html` | Recuperação de acesso |
| `termos.html` · `privacidade.html` | Documentos legais |
| `painel.html` | Painel do profissional — visão geral |
| `painel-conteudos.html` · `painel-conteudo-novo.html` | Gestão e criação de conteúdo |
| `painel-assinatura.html` · `painel-contatos.html` · `painel-configuracoes.html` | Assinatura, mensagens e conta |

**As 32 páginas cobrem o inventário de telas da seção 6.1 da especificação.**

O administrativo não é acessível pela navegação do site — abra `admin.html`
diretamente. A barra escura no topo sinaliza que se trata de contexto privilegiado.

As telas de conta usam um cabeçalho enxuto, sem o menu principal, para o fluxo não
competir com a navegação. As mensagens de erro são as da seção 7 da especificação,
ao pé da letra.

`design-system.css` concentra tokens e componentes. **Leia o cabeçalho do arquivo antes
de editar** — ele lista as regras da linguagem visual e duas armadilhas de contraste.

## Responsivo e webapp

Funciona de 320px a telas grandes. Tipografia fluida com `clamp()` e três pontos de
quebra: **1200 / 1024 / 760** (mais um ajuste em 340px).

- **Menu:** no celular vira uma grade de duas colunas — todos os itens visíveis, sem
  esconder navegação atrás de um ícone.
- **Carrossel do diretório:** rola por toque, com encaixe (`scroll-snap`). Sem JavaScript.
- **Mapa:** traços mais grossos e rótulos maiores no celular; as contagens por cidade
  saem, porque o tamanho do ponto e a legenda já dão a grandeza.
- **Alvos de toque:** mínimo de 24px (WCAG 2.2 · 2.5.8, nível AA), a maioria com 44px.
- Instalável como app: `manifest.webmanifest`, ícones e `theme-color`.
- Inclui folha de impressão e respeito a `prefers-reduced-motion`.

Verificado em 360, 390, 768, 1024 e 1440px: sem rolagem horizontal e sem alvo abaixo
do mínimo em nenhuma das sete páginas.

## Publicar no GitHub Pages

Tudo pelo navegador, sem terminal:

1. Em **github.com**, clique em **New repository**. Dê um nome (ex.: `confluencias-prototipo`)
   e marque **Public**. Crie sem README.
2. Na tela seguinte, clique em **uploading an existing file**.
3. Arraste **todos** os arquivos e a pasta `assets`. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**;
   em *Branch*, escolha `main` e a pasta `/ (root)`. Salve.
5. Aguarde um ou dois minutos. O endereço aparece na própria página:
   `https://SEU-USUARIO.github.io/confluencias-prototipo/`

Pronto — é esse link que você compartilha.

## Importante

Todo o conteúdo é **fictício**, criado para demonstrar o design: nomes, CRPs, textos,
eventos, referências e os números do mapa. Nada disso são dados reais.

Duas pendências antes do desenvolvimento:

- **Vetorizar a logo para SVG.** Hoje é PNG; no cabeçalho, a 84px, já está no limite da nitidez.
- **Substituir os números** do cabeçalho e do mapa por dados reais.
