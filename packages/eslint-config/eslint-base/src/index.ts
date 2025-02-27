// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import unuserdPlugin from "eslint-plugin-unused-imports";
import type TSESLint from "@typescript-eslint/utils";
import cspellPlugin from "@cspell/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import turboPlugin from "eslint-plugin-turbo";

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
  plugins: {
    "unused-imports": unuserdPlugin,
    "@cspell": cspellPlugin,
    unicorn: eslintPluginUnicorn,
    turbo: turboPlugin,
  },
  rules: {
    // ESlint core
    curly: "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    // https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-new-eslintconfigjs
    "@cspell/spellchecker": ["warn", {}],
    // https://zenn.dev/yskn_sid25/articles/c309f804fde5a5#%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97
    ...eslintPluginUnicorn.configs.recommended.rules,
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        allowList: ["^ENV_[A-Z]+$"],
      },
    ],
  },
}) satisfies TSESLint.TSESLint.FlatConfig.ConfigArray;

export default config;
