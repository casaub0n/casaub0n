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
import pluginNext from "@next/eslint-plugin-next";
import { ignoreConfig } from "@casaub0n/eslint-config-utils/ignore-config";
import { eslintCoreRules } from "@casaub0n/eslint-config-utils/eslint-core-rules";
import { typescriptRules } from "@casaub0n/eslint-config-utils/typescript-rules";
import { importX } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/**
 * This config compatible with TypeScript project, YAML file, JavaScript file.
 *
 * @param tsconfigFileName `./tsconfig.json`
 * @param tsConfigurationRootDirectory `import.meta.dirname` [The directory name of the current module. This is the same as the `path.dirname()` of the `import.meta.filename`.](https://nodejs.org/api/esm.html#importmetadirname)
 * @param rootDirectory `import.meta.dirname` [The directory name of the current module. This is the same as the `path.dirname()` of the `import.meta.filename`.](https://nodejs.org/api/esm.html#importmetadirname)
 *
 * `eslint` is needed at root directory. Use [defineConfig](https://eslint.org/docs/latest/use/configure/configuration-files)
 *
 * @example ```javascript
 * import base from "../eslint-config/eslint-base/dist/index.mjs";
 *
 * export default [
 *   ...base({
 *     tsConfigurationRootDirectory: import.meta.dirname,
 *     tsconfigFileName: "./tsconfig.json",
 *     rootDirectory: import.meta.dirname,
 *   }),
 * ]
 * ```
 * @see [turborepo/examples/kitchen-sink/packages/config-eslint/next.js at main · vercel/turborepo](https://github.com/vercel/turborepo/blob/main/examples/kitchen-sink/packages/config-eslint/next.js)
 */
const config = ({
  tsconfigFileName = "./tsconfig.json",
  tsConfigurationRootDirectory = import.meta.dirname,
  rootDirectory = "apps/next-casaub0n/",
}: Readonly<{
  tsconfigFileName: string;
  tsConfigurationRootDirectory: string;
  rootDirectory: string;
}>): TSESLint.TSESLint.FlatConfig.ConfigArray =>
  tseslint.config([
    /**
     * @see https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40eslint%2Fjs
     */
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
    // https://typescript-eslint.io/getting-started/typed-linting/
    ...compat.config({
      extends: ["next", "next/core-web-vitals", "next/typescript"],
      settings: {
        next: {
          rootDir: rootDirectory,
        },
      },
    }),
    {
      files: ["**/*.cts", "**/*.ctsx", "**/*.mts", "**/*.mtsx", "**/*.ts", "**/*.tsx"],
      ignores: [...ignoreConfig, "**/*.mjs", "**/*.js"],
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
          tsconfigRootDir: tsConfigurationRootDirectory,
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
          /**
           * https://stackoverflow.com/a/78997913
           */
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
      plugins: {
        "unused-imports": unusedImports,
        "@next/next": pluginNext,
        /**
         * SyntaxError: Named export 'flatConfig' not found. The requested module '@next/eslint-plugin-next' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:
         */
        // "@next/next": flatConfig.recommended.plugins["@next/next"], // This package is CommonJS style
        unicorn: eslintPluginUnicorn,
        turbo: turboPlugin.configs["flat/recommended"].plugins.turbo,
        "import-x": importX,
      },
      rules: {
        ...eslintCoreRules,
        ...typescriptRules,

        ...(pluginNext.configs.recommended.rules as TSESLint.TSESLint.FlatConfig.Rules),
        ...(pluginNext.configs["core-web-vitals"].rules as TSESLint.TSESLint.FlatConfig.Rules),

        // ...(flatConfig.recommended.plugins["@next/next"].configs.recommended
        //   .rules as TSESLint.TSESLint.FlatConfig.Rules),
        // ...(flatConfig.coreWebVitals.rules as TSESLint.TSESLint.FlatConfig.Rules),

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
        ...eslintPluginUnicorn.configs.all.rules,
        ...turboPlugin.configs["flat/recommended"].rules,
        ...importX.flatConfigs.recommended.rules,
        ...importX.flatConfigs.typescript.rules,
      },
      settings: {
        "import-x/resolver-next": createTypeScriptImportResolver({
          project: "tsconfig.{app,node}.json",
        }),
      },
    },
    {
      files: ["**/*.mjs", "**/*.js"],
      ignores: ignoreConfig,
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2025,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
      },
      plugins: {
        js: pluginJs,
        unicorn: eslintPluginUnicorn,
        turbo: turboPlugin.configs["flat/recommended"].plugins.turbo,
      },
      rules: {
        ...pluginJs.configs.recommended.rules,
        ...eslintCoreRules,
        ...eslintPluginUnicorn.configs.all.rules,
        ...turboPlugin.configs["flat/recommended"].rules,
      },
    },
    /**
     * @see https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-new-eslintconfigjs
     */
    cspellESLintPluginRecommended,

    /**
     * @see https://github.com/storybookjs/eslint-plugin-storybook?tab=readme-ov-file#configuration-eslintconfigcmjs
     */
    storybook.configs["flat/recommended"],

    /**
     * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
     */
    pluginConfigPrettier,

    {
      ignores: ignoreConfig,
    },
  ]);

export default config;
