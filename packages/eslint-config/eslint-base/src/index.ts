// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import unuserdPlugin from "eslint-plugin-unused-imports";
import type TSESLint from "@typescript-eslint/utils";
import cspellPlugin from "@cspell/eslint-plugin";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

/**
 * Gemini: https://g.co/gemini/share/5086f0d94b4e
 */
const config = tseslint.config({
  extends: [
    // ...compat.extends("next/core-web-vitals", "next/typescript"),
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  ],
  plugins: { "unused-imports": unuserdPlugin, "@cspell": cspellPlugin },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    // https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-new-eslintconfigjs
    "@cspell/spellchecker": ["warn", {}],
  },
}) satisfies TSESLint.TSESLint.FlatConfig.ConfigArray;

export default config;
