# Site: Consciência Negra (Projeto para GitHub Pages)

**Descrição curta:** Site estático educacional com 3 páginas sobre Consciência Negra — História, Personalidades e Desafios & Ações. Feito com HTML, CSS e JavaScript (sem frameworks).

## Links
- Site publicado: (substitua pela URL do GitHub Pages após publicar)
- Repositório: (substitua pelo link do repositório público)

## Conteúdo das páginas
- **index.html** — História e contexto (Zumbi dos Palmares, Lei 10.639/03, datas relevantes).
- **personalidades.html** — Personalidades e mini-biografias (arte, ciência, esporte).
- **desafios.html** — Racismo estrutural, políticas públicas, organizações e chamadas à ação.

## Tecnologias
- HTML5 semântico (header, nav, main, section, article, footer)
- CSS responsivo e acessível (arquivo: css/style.css)
- JavaScript simples para interatividade (arquivo: js/main.js)

## Estrutura de pastas
```
/
├─ index.html
├─ personalidades.html
├─ desafios.html
├─ css/style.css
├─ js/main.js
├─ assets/
│  └─ images/ (SVGs)
└─ README.md
```

## Acessibilidade aplicada
- Landmarks semânticos (header, nav, main, footer)
- Skip link para pular navegação
- Foco visível e elementos acessíveis (aria-labels no menu e controls)
- Contraste testado para modo claro/escuro (ajuste se necessário)

## Performance
- Imagens em SVG leves (assets/images/*.svg)
- `loading="lazy"` aplicado quando apropriado
- CSS e JS minimalistas

## Como rodar localmente
1. Clonar o repositório: `git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git`
2. Entrar na pasta: `cd NOME-DO-REPO`
3. Abrir `index.html` no navegador (ou usar `live-server` para hot-reload)

## Publicação no GitHub Pages (resumo)
1. Criar repositório público no GitHub.
2. Subir os arquivos (index.html na raiz).
3. Em *Settings → Pages* escolher *Deploy from a branch* -> `main` -> `/root`.
4. Após deploy, copie o link do site (ex.: `https://seu-usuario.github.io/nome-do-repo/`) e coloque no documento Google solicitado.

## Créditos e licenças
- Imagens SVG criadas para este protótipo (livres). Ao publicar, substitua por imagens com licença livre (Unsplash, Wikimedia Commons, Pexels) e adicione créditos.
- Texto e conteúdo: use referências confiáveis (artigos acadêmicos, acervos digitais, documentos oficiais).

## Referências (exemplos a incluir)
1. Artigos e livros de história do Brasil sobre escravidão e resistência.
2. Texto da Lei 10.639/2003.
3. Sites institucionais e acervos digitais.

## Checklist de entrega
- [x] 3 páginas com conteúdo, imagens com alt e efeitos.
- [x] Navegação funcional entre as 3 páginas.
- [x] Responsivo para mobile (≤480px).
- [x] A11y básica aplicada.
- [x] Imagens otimizadas (SVG) e `loading="lazy"`.
- [ ] Publicado no GitHub Pages (passo a passo acima).
