# Thayná Müller · Portfólio

Portfólio pessoal de **Frontend Developer & UX/UI Designer**, com projetos, skills, blog e contato.

🔗 **[thaynamuller.com](https://thaynamuller.com)**

Feito com Next.js, TypeScript e Tailwind CSS, com foco em performance, SEO, responsividade e microanimações.

---

## Funcionalidades

### Home (página única com navegação por seções)
- **Hero:** título "Frontend & UX/UI Designer" e atalho para a seção de contato. No mobile, a foto aparece num círculo com texto girando em volta.
- **Sobre:** apresentação e trajetória.
- **Projetos:** carrossel (Swiper) de cards com vídeo de preview e tipo do projeto (Front-end, UX/UI ou os dois). Cada card abre um **modal de estudo de caso** com galeria de imagens, descrição, tecnologias e links (GitHub, Medium, Figma, Behance).

  | Projeto | Tipo |
  | --- | --- |
  | Remedia | UX/UI + Front-end |
  | Finny – Cashback Goals | UX/UI |
  | Nearby | Front-end |
  | Itaú – Ecossistema digital | UX/UI |
  | Este portfólio | Front-end |

- **Skills & Ferramentas:** cena 3D interativa (Spline) com a descrição das skills (React, Next.js, TypeScript, Tailwind, SCSS e Figma).
- **Contato:** formulário (nome, e-mail e mensagem) enviado pelo Formspree, com mensagem de sucesso ou erro. Também tem links para LinkedIn, GitHub, Behance e Instagram, e um texto "Fale comigo" com efeito de decodificação.

### Blog
- Lista de artigos do **Medium** com capa, data e resumo, linkando para o post original.
- Os posts vêm de `public/medium-posts.json`, gerado por um script que lê o feed RSS e filtra a tag `javascript`.

### Geral
- **Idiomas:** português e inglês, com detecção automática e troca na navbar.
- **Navbar** com destaque da seção ativa e rota para o blog.
- **SEO:** sitemap e `robots.txt` gerados pelo `next-sitemap`.
- **Animações:** Framer Motion, GSAP e Three.js / React Three Fiber.
- **Site estático** (`output: "export"`), com deploy na AWS.

---

## Stack

| Área | Tecnologias |
| --- | --- |
| Base | Next.js 16 (App Router, static export), React 18, TypeScript |
| Estilo | Tailwind CSS, tailwindcss-animate, CSS Modules |
| Animação e 3D | Framer Motion, GSAP, Spline, Three.js, React Three Fiber / Drei, Typewriter Effect |
| UI | Swiper, React Icons, Lucide |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| Conteúdo | rss-parser + cheerio (Medium), Formspree (contato) |
| Qualidade | ESLint, Prettier |
| Deploy | GitHub Actions → AWS S3 + CloudFront |

---

## Estrutura

```
src/
  app/
    page.tsx           Home (hero, sobre, projetos, skills, contato)
    blog/page.tsx      Blog com posts do Medium
    layout.tsx         Layout, metadados e provider de i18n
  components/          NavBar, Card, ProjectModal, Swipper, Carousel,
                       ContactForm, Loading, ui/timeline
  locales/             pt.json, en.json e configuração do i18next
scripts/fetchMedium.js Gera public/medium-posts.json a partir do RSS
public/assets/         Imagens e vídeos de preview dos projetos
.github/workflows/     Deploy automático
```

---

## Como rodar

```bash
git clone https://github.com/7hayMuller/portifolio.git
cd portifolio
npm install
npm run dev        # http://localhost:3000
```

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `out/` |
| `npm run lint` | ESLint |
| `npm run sitemap` | Gera sitemap e robots.txt |
| `node scripts/fetchMedium.js` | Atualiza os posts do blog |

---

## Deploy

A cada push na `main`, o GitHub Actions:

1. instala as dependências e roda o build
2. sincroniza a pasta `out/` com o bucket S3
3. invalida o cache do CloudFront

Secrets necessários no repositório: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET_NAME` e `CLOUDFRONT_DISTRIBUTION_ID`.

---

© 2026 Thayná Müller. Todos os direitos reservados.
