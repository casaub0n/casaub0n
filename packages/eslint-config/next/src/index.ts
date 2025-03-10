import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import unuserdPlugin from "eslint-plugin-unused-imports";
import type TSESLint from "@typescript-eslint/utils";
import cspellPlugin from "@cspell/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import turboPlugin from "eslint-plugin-turbo";
import pluginConfigPrettier from "eslint-config-prettier";

/**
 * by eslint rule
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md#enforce-specific-import-styles-per-module
 */
const { dirname } = path;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * TODO: check .gitignore
 */
const ignoreConfig = {
  ignores: ["**/dist/**/*", ".next"],
};

/**
 * Gemini: https://g.co/gemini/share/5086f0d94b4e
 */
const config = tseslint.config([
  ignoreConfig,
  {
    extends: [
      // ...compat.extends("next/core-web-vitals", "next/typescript"),
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...compat.config({
        extends: ["next"],
      }),
    ],
    plugins: {
      "unused-imports": unuserdPlugin,
      "@cspell": cspellPlugin,
      unicorn: eslintPluginUnicorn,
      turbo: turboPlugin,
    },
    rules: {
      /**
       * [eslint-config/base/index.js at master · herp-inc/eslint-config](https://github.com/herp-inc/eslint-config/blob/master/base/index.js)
       */
      // ESlint core
      curly: "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "no-console": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-negated-condition": "error",
      "no-new": "error",
      "no-new-object": "error",
      "no-new-wrappers": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": ["error", { allowInParentheses: false }],
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-useless-backreference": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "prefer-object-spread": "error",
      "@typescript-eslint/no-unused-vars": "error",
      /**
       * [最低限の flat config（まずは no-unused-imports を動かす）](https://zenn.dev/seventhseven07/articles/06a02c4048decf)
       */
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
  },
  /**
   * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
   */
  pluginConfigPrettier,
]) satisfies TSESLint.TSESLint.FlatConfig.ConfigArray;

export default config;
