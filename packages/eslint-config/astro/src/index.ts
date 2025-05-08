import type TSESLint from "@typescript-eslint/utils";
import js from "@eslint/js";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * @see https://zenn.dev/suree/articles/71591ec903463d
 */
const config: TSESLint.TSESLint.FlatConfig.ConfigArray = [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        dataLayer: false,
      },
    },
  },

  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#recommended-config
   */
  eslintPluginUnicorn.configs.all,
  {
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: [".astro$"],
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            Props: true,
          },
        },
      ],
    },
  },

  eslintConfigPrettier,
];

export default config;
