# halfguru.github.io

Personal portfolio website for Simon Ho built with Astro and Tailwind CSS.

## Overview
This repository contains a fast, minimal portfolio site built with `astro` and styled with Tailwind CSS. Content is driven from `src/config.ts`, and the site is deployed to GitHub Pages via the workflow at `.github/workflows/deploy.yml`.

## Tech stack
- Astro
- Tailwind CSS (via `@tailwindcss/vite`)
- Vite
- GitHub Actions (Pages)

## Quick start

Requirements:
- Node.js 18+
- `npm`

Install dependencies:
```zsh
npm ci
```

Run development server:
```zsh
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:3000).

Build for production:
```zsh
npm run build
```

Preview the built output locally:
```zsh
npm run preview
```

## Configuration
- Main site config and personal content are in config.ts. Update siteConfig there to change name, title, description, social links, skills, projects, experience, and education.
- Site configuration for Astro is in astro.config.mjs.
- Pages and components live under pages and components.

## Deployment
This repo deploys to GitHub Pages using the workflow at `deploy.yml`. The workflow:

- Runs on pushes to `main` (or manually via `workflow_dispatch`)
- Builds the site with the `withastro/action` action
- Deploys using `actions/deploy-pages`

No additional configuration should be required on GitHub if GitHub Pages is enabled for this repo; the workflow uses repository permissions to create the page deployment.

## Editing content
- To update text, projects, or experience entries, edit `config.ts`.
- To change layout or styling, edit files in `components` and `styles`.

## Project structure 
- `astro.config.mjs` — Astro configuration, Vite plugins.
- `package.json` — Scripts: `dev`, `build`, `preview`.
- `config.ts` — Primary site data (name, social links, about, projects, experience).
- `index.astro` — Home page.
- `components` — Page components.
- `deploy.yml` — GitHub Actions deployment pipeline.