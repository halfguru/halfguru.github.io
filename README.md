# halfguru.github.io

Personal portfolio website for Simon Ho built with Astro and Tailwind CSS.

## Overview

Fast, minimal portfolio site built with Astro and styled with Tailwind CSS. Content is driven from `src/config.ts`, and the site is deployed to GitHub Pages via workflow automation.

## Tech Stack

- **Astro 5.12.3** — Modern static site generator
- **Tailwind CSS 4.1.11** — Utility-first CSS via @tailwindcss/vite
- **TypeScript** — Strict mode enabled
- **Vite** — Build tool and dev server
- **GitHub Actions** — Automated deployment to Pages

## Quick Start

Requirements: Node.js 18+ and npm

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npx astro check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## Configuration

Edit `src/config.ts` to customize:
- Personal info (name, title, description)
- Social links
- About section text
- Skills list
- Projects, experience, and education entries

Edit `astro.config.mjs` for Astro/Vite configuration.

## Project Structure

```
src/
  ├── components/       # Reusable Astro components
  ├── pages/           # Page routes (index.astro is home)
  ├── styles/          # Global styles (global.css)
  └── config.ts        # Site configuration and content data
```

## Deployment

Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`:
- Runs linting and type checks before building
- Uses `withastro/action` for building
- Deploys with `actions/deploy-pages`
- Requires GitHub Pages enabled with repository permissions

Live site: https://halfguru.github.io
