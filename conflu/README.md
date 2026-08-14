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

`design-system.css` concentra tokens e componentes. **Leia o cabeçalho do arquivo antes
de editar** — ele lista as regras da linguagem visual e duas armadilhas de contraste.

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
