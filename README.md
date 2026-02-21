# Simon Ho — Portfolio

[![Deploy to GitHub Pages](https://github.com/halfguru/halfguru.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/halfguru/halfguru.github.io/actions/workflows/deploy.yml)
[![Astro](https://img.shields.io/badge/Astro-5.12-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A fast, minimal portfolio website built with Astro and Tailwind CSS. Content is configured through a single `src/config.ts` file and deployed to GitHub Pages.

**Live site**: [halfguru.github.io](https://halfguru.github.io)

![Portfolio Screenshot](./screenshot.png)

## Features

- Single-file configuration for all content
- Dark mode with system preference detection
- Responsive, mobile-first design
- SEO optimized (sitemap, Open Graph, JSON-LD)
- Automatic deployment via GitHub Actions
- TypeScript strict mode
- ESLint + Astro plugin

## Quick Start

```bash
npm ci              # Install dependencies
npm run dev         # Start dev server (localhost:4321)
npm run build       # Production build
npm run preview     # Preview build locally
npx astro check     # Type checking
npm run lint        # Lint
```

**Requirements**: Node.js 18+

## Configuration

Edit `src/config.ts` to customize:

| Property | Description |
|----------|-------------|
| `name`, `title`, `description` | Site metadata |
| `accentColor` | Primary color (hex) |
| `social` | Email, LinkedIn, Twitter, GitHub links |
| `aboutMe` | Bio text |
| `skills` | Array of skill strings |
| `projects` | Projects with name, description, link, skills |
| `experience` | Work history with company, title, dateRange, bullets |
| `education` | Schools with degree, dateRange, achievements |

## Project Structure

```
src/
├── components/    # Astro components (Header, Hero, About, etc.)
├── pages/         # Routes (index.astro)
├── styles/        # Global CSS
└── config.ts      # Site content and configuration
```

## Deployment

Automatically deploys to GitHub Pages on push to `main`:

1. Lint and type check
2. Build with `withastro/action`
3. Deploy with `actions/deploy-pages`

## License

MIT
