import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...astroPlugin.configs.recommended,
  {
    ignores: ["dist/**", ".astro/**"],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
