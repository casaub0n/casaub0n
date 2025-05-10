import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @see https://github.com/sweepline/eslint-plugin-unused-imports/tree/master?tab=readme-ov-file#usage
 */
import unusedImports from "eslint-plugin-unused-imports";
import type TSESLint from "@typescript-eslint/utils";
import cspellESLintPluginRecommended from "@cspell/eslint-plugin/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import turboPlugin from "eslint-plugin-turbo";
import storybook from "eslint-plugin-storybook";
import pluginConfigPrettier from "eslint-config-prettier";
import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import { ignoreConfig } from "@casaub0n/eslint-config-utils";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * **Usage** is at README because this eslint-config compile to a ESM file in dist.
 *
 * So, the user will call a compiled ESM file into their `eslint.config.mjs`.
 * @param tsconfigFileName `./tsconfig.json`
 * @param tsconfigRootDir `import.meta.dirname` [The directory name of the current module. This is the same as the `path.dirname()` of the `import.meta.filename`.](https://nodejs.org/api/esm.html#importmetadirname)
 * @param rootDirectory `import.meta.dirname` [The directory name of the current module. This is the same as the `path.dirname()` of the `import.meta.filename`.](https://nodejs.org/api/esm.html#importmetadirname)
 * @example ```javascript
 * import base from "../eslint-config/eslint-base/dist/index.mjs";
 *
 * export default [
 *   ...base({
 *     tsconfigRootDir: import.meta.dirname,
 *     tsconfigFileName: "./tsconfig.json",
 *     rootDirectory: import.meta.dirname,
 *   }),
 * ]
 * ```
 * @see https://github.com/vercel/turborepo/blob/main/examples/kitchen-sink/packages/config-eslint/next.js
 */
const config = ({
  tsconfigFileName = "./tsconfig.json",
  // eslint-disable-next-line unicorn/prevent-abbreviations
  tsconfigRootDir = import.meta.dirname,
  rootDirectory = import.meta.dirname,
}: Readonly<{
  tsconfigFileName: string;
  tsconfigRootDir: string;
  rootDirectory: string;
}>): TSESLint.TSESLint.FlatConfig.ConfigArray =>
  tseslint.config([
    {
      ignores: ignoreConfig,
    },

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
        ...compat.config({
          extends: ["next", "next/core-web-vitals", "next/typescript"],
          settings: {
            next: {
              rootDir: rootDirectory,
            },
          },
        }),
        // ...tseslint.configs.stylistic,
      ],
      languageOptions: {
        ecmaVersion: "latest",
        parser: typescriptEslintParser,
        globals: {
          ...globals.browser,
          ...globals.es2025,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
        parserOptions: {
          project: tsconfigFileName,
          tsconfigRootDir,
          sourceType: "module",
          projectService: true,
          ecmaVersion: "latest",
          // eslint-disable-next-line unicorn/no-null
          jsxPragma: null, // for @typescript/eslint-parser
          ecmaFeatures: {
            modules: true,
            impliedStrict: true,
            jsx: true,
          },
        },
      },
      plugins: {
        "unused-imports": unusedImports,
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

        /**
         * React
         * @see https://github.com/herp-inc/eslint-config/blob/master/react/index.js
         */
        "react/jsx-no-target-blank": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
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
     * @see https://github.com/storybookjs/eslint-plugin-storybook?tab=readme-ov-file#configuration-eslintconfigcmjs
     */
    storybook.configs["flat/recommended"],

    /**
     * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
     */
    pluginConfigPrettier,
  ]);

export default config;
