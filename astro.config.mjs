// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-expect-error - Vite plugin type compatibility issue between Tailwind and Astro
      tailwindcss()
    ],
  },
  site: 'https://halfguru.github.io'
});
