/* eslint-disable @cspell/spellchecker -- The config include ignore file */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import unuserdPlugin from "eslint-plugin-unused-imports";
import type TSESLint from "@typescript-eslint/utils";
import cspellESLintPluginRecommended from "@cspell/eslint-plugin/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import turboPlugin from "eslint-plugin-turbo";
import pluginConfigPrettier from "eslint-config-prettier";
import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import { ignoreConfig } from "./ignore-config";

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
 * Usage is at README because this eslint-config compile to a ESM file in dist.
 *
 * So, the user will call a compiled ESM file into their `eslint.config.mjs`.
 */
const config = tseslint.config([
  ignoreConfig,

  /**
   * @see https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40eslint%2Fjs
   */
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  // https://typescript-eslint.io/getting-started/typed-linting/
  {
    files: ["*.cts", "*.ctsx", "*.mts", "*.mtsx", "*.ts", "*.tsx"],
    extends: [
      // ...compat.extends("next/core-web-vitals", "next/typescript"),
      ...compat.extends(),
      // ...tseslint.configs.stylistic,
    ],
    languageOptions: {
      parser: typescriptEslintParser,
      globals: {
        ...globals.builtin,
      },
      parserOptions: {
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "unused-imports": unuserdPlugin,
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
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      // @typescript-eslint
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "never",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-exports": [
        "error",
        {
          fixMixedExportsWithInlineTypeSpecifier: false,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "accessor",
          format: ["camelCase"],
        },
        {
          selector: "enumMember",
          format: ["PascalCase"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "method",
          format: ["camelCase", "PascalCase"],
          filter: {
            regex: "^__resolveType$",
            match: false,
          },
        },
        {
          selector: "objectLiteralMethod",
          // eslint-disable-next-line unicorn/no-null
          format: null,
        },
        {
          selector: "objectLiteralProperty",
          // eslint-disable-next-line unicorn/no-null
          format: null,
        },
        {
          selector: "parameter",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          modifiers: ["destructured"],
          // eslint-disable-next-line unicorn/no-null
          format: null,
        },
        {
          selector: "parameterProperty",
          format: ["camelCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          filter: {
            regex: "^_$",
            match: false,
          },
        },
        {
          selector: "variable",
          modifiers: ["destructured"],
          // eslint-disable-next-line unicorn/no-null
          format: null,
        },
      ],
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
      "@typescript-eslint/no-invalid-void-type": ["error", { allowAsThisParameter: true }],
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unused-expressions": ["error", { enforceForJSX: true }],
      "@typescript-eslint/no-unused-vars": "off", // Let TypeScript check it
      "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

      /**
       * [最低限の flat config（まずは no-unused-imports を動かす）](https://zenn.dev/seventhseven07/articles/06a02c4048decf)
       */
      "unused-imports/no-unused-imports": "error",
    },
  },
  /**
   * @see https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-new-eslintconfigjs
   */
  cspellESLintPluginRecommended,

  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#recommended-config
   */
  eslintPluginUnicorn.configs.all,

  /**
   * @see https://github.com/vercel/turborepo/tree/main/packages/eslint-plugin-turbo#usage-flat-config-eslintconfigjs
   */
  turboPlugin.configs["flat/recommended"],

  /**
   * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
   */
  pluginConfigPrettier,
]) satisfies TSESLint.TSESLint.FlatConfig.ConfigArray;

export default config;
