# 🏀 NBA Astros Gallery

Galeria de astros da NBA feita em React, com os dados carregados por `useEffect` e a tela dividida em dois componentes reutilizáveis: `Header` e `Card`.

## Estrutura

```
nba-astros-gallery/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── jogadores/          <- coloque aqui as fotos (.jpg)
└── src/
    ├── main.jsx
    ├── App.jsx             <- dados mocados + useState/useEffect
    ├── index.css
    └── components/
        ├── Header.jsx
        └── Card.jsx
```

## Como rodar

Pré-requisito: Node.js 18 ou superior (`node -v` para conferir).

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Fotos dos jogadores

Salve as imagens em `public/jogadores/` com estes nomes:

- `lebron-james.jpg`
- `stephen-curry.jpg`
- `giannis-antetokounmpo.jpg`
- `luka-doncic.jpg`
- `nikola-jokic.jpg`
- `jayson-tatum.jpg`

Arquivos dentro de `public/` são servidos a partir da raiz, por isso o caminho no
código é `/jogadores/lebron-james.jpg`. Enquanto a foto não existir, o card mostra
as iniciais do atleta no lugar da imagem.

## Build de produção

```bash
npm run build
npm run preview
```
