# AGENTS.md - Development Guide for Agentic Coding

This document provides guidance for agentic coding agents working in this Astro + Tailwind CSS portfolio repository.

## Build & Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install dependencies
npm ci

# Type checking
npx astro check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix
```

**Note**: No test framework is currently configured. Add tests before running any test commands.

## Tech Stack

- **Astro 5.12.3**: Modern static site generator with island architecture
- **Tailwind CSS 4.1.11**: Utility-first CSS via @tailwindcss/vite
- **TypeScript**: Strict mode enabled (extends astro/tsconfigs/strict)
- **Vite**: Build tool and dev server

## Code Style Guidelines

### File Structure

- `.astro` files for components and pages
- Place TypeScript/JavaScript logic in Astro frontmatter (between `---` fences)
- Component files in `src/components/`
- Pages in `src/pages/`
- Global styles in `src/styles/`
- Site configuration in `src/config.ts`

### Imports

- Use relative imports from current directory: `import { siteConfig } from "../config"`
- Named imports for config values: `import { siteConfig } from "../config"`
- Default imports for components: `import Header from "../components/Header.astro"`
- All imports go in the frontmatter section at top of `.astro` files

### TypeScript

- Strict mode enabled - type all new code properly
- Use optional chaining for potentially undefined values: `siteConfig.social?.email`
- Array methods like `.map()` for iterating over data
- Type inference preferred over explicit typing when types are clear
- Export config object: `export const siteConfig = { ... }`
- Run type checking: `npx astro check` to validate types before committing

### Linting

- ESLint configured with flat config (eslint.config.mjs)
- Includes TypeScript, JavaScript, and Astro rules
- Run `npm run lint` to check code style
- Run `npm run lint:fix` to auto-fix linting issues
- Lint errors prevent deployment in CI

### Component Structure (`.astro` files)

```
---
// Imports
// TypeScript logic
const variable = value;
---

<!-- Template HTML -->
<div class="classes">
  {variable}
</div>

<script>
  // Client-side JavaScript
</script>

<style>
  /* Component-specific CSS if needed */
</style>
```

### Styling with Tailwind

- Use Tailwind utility classes for all styling
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:` (mobile-first approach)
- Dynamic values via CSS variables: `hover:text-[var(--accent-color)]`
- Inline styles for dynamic values only: `style={{ color: siteConfig.accentColor }}`
- Set CSS variables on parent: `style={`--accent-color: ${siteConfig.accentColor}`}`
- Avoid custom CSS except for animations in `<style>` blocks
- Use semantic spacing utilities: `p-8`, `gap-4`, `mt-6`

### Naming Conventions

- **Files**: kebab-case (e.g., `Header.astro`, `global.css`)
- **Components**: PascalCase (e.g., `import Header from "../components/Header.astro"`)
- **Variables**: camelCase (e.g., `hasProjects`, `siteConfig`)
- **Config properties**: camelCase (e.g., `aboutMe`, `dateRange`)
- **CSS classes**: Tailwind utilities only (kebab-case if custom)

### Conditional Rendering

- Use ternary operator or logical AND: `{hasProjects && <li>...</li>}`
- Conditional expressions in template: `{siteConfig.social?.email && <a>...</a>}`
- Define computed values in frontmatter for readability:
  ```ts
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  ```

### Accessibility

- Use semantic HTML elements: `<header>`, `<nav>`, `<section>`, `<footer>`
- Add ARIA labels to interactive elements without text: `aria-label="Email"`
- External links: `target="_blank"` and `rel="noopener noreferrer"`
- Use proper heading hierarchy (h1 → h2 → h3)
- Ensure color contrast (check Tailwind colors)

### Error Handling

- Optional chaining for potentially undefined config properties
- No explicit error handling patterns observed - keep it simple
- Validate data structure in config.ts if adding new properties

### Animations

- Define custom keyframes in component `<style>` blocks
- Use Tailwind animation classes when possible
- Add animation delays via utility classes or custom CSS

### Adding New Features

1. Update `src/config.ts` with new data
2. Import config in component: `import { siteConfig } from "../config"`
3. Use Tailwind classes for styling
4. Test responsiveness with `sm:`, `md:`, `lg:` breakpoints
5. Ensure accessibility (semantic HTML, ARIA labels)
6. Run type checking: `npx astro check` and linting: `npm run lint`
7. Build locally: `npm run build` to verify

### Deployment

- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Runs linting and type checks before building
- Deploys to GitHub Pages on push to `main`
- Node.js 18+ required
- No environment variables currently configured

### Common Patterns

**Component with dynamic content**:
```astro
---
import { siteConfig } from "../config";
const hasData = siteConfig.someProperty && siteConfig.someProperty.length > 0;
---

<section class="p-8">
  {hasData && siteConfig.someProperty.map((item) => (
    <div class="mb-4">{item.name}</div>
  ))}
</section>
```

**Styling with dynamic accent color**:
```astro
<div style={`--accent-color: ${siteConfig.accentColor}`}>
  <span class="hover:text-[var(--accent-color)]">Text</span>
</div>
```

**Conditional rendering based on config**:
```astro
{siteConfig.social?.github && (
  <a href={siteConfig.social.github} aria-label="GitHub">Link</a>
)}
```
