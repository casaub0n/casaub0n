import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @see https://github.com/sweepline/eslint-plugin-unused-imports/tree/master?tab=readme-ov-file#usage
 */
import unusedImports from "eslint-plugin-unused-imports";
import cspellESLintPluginRecommended from "@cspell/eslint-plugin/recommended";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import turboPlugin from "eslint-plugin-turbo";
import pluginConfigPrettier from "eslint-config-prettier";
import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import { ignoreConfig } from "@casaub0n/eslint-config-utils/ignore-config";
import { eslintCoreRules } from "@casaub0n/eslint-config-utils/eslint-core-rules";
import { typescriptRules } from "@casaub0n/eslint-config-utils/typescript-rules";
import eslintPluginYml from "eslint-plugin-yml";
import { importX } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import type { Linter } from "eslint";
import type { RuleOptions } from "./types.gen.ts";

export interface TypedFlatConfig extends Omit<Linter.Config, "rules"> {
  rules?: RuleOptions;
}

export const basePreset = (...userConfigs: TypedFlatConfig[]): Linter.Config[] =>
  defineConfig([
    /**
     * @see https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40eslint%2Fjs
     */
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
    // https://typescript-eslint.io/getting-started/typed-linting/
    {
      files: ["**/*.cts", "**/*.ctsx", "**/*.mts", "**/*.mtsx", "**/*.ts", "**/*.tsx"],
      ignores: [...ignoreConfig, "**/*.mjs", "**/*.js"],
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
          tsconfigRootDir: import.meta.dirname,
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
        unicorn: eslintPluginUnicorn,
        turbo: turboPlugin,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "import-x": importX as any,
      },
      rules: {
        ...eslintCoreRules,
        ...typescriptRules,

        /**
         * unused-config
         * [最低限の flat config（まずは no-unused-imports を動かす）](https://zenn.dev/seventhseven07/articles/06a02c4048decf)
         * [sweepline/eslint-plugin-unused-imports: Package to separate no-unused-vars and no-unused-imports for eslint as well as providing an autofixer for the latter.](https://github.com/sweepline/eslint-plugin-unused-imports/tree/master?tab=readme-ov-file#usage)
         */
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
        ...eslintPluginUnicorn.configs.all.rules,
        "turbo/no-undeclared-env-vars": [
          "error",
          {
            allowList: ["^ENV_[A-Z]+$"],
          },
        ],
        ...importX.flatConfigs.recommended.rules,
        ...importX.flatConfigs.typescript.rules,
      },
      /**
       * https://github.com/un-ts/eslint-plugin-import-x/issues/229#issuecomment-2654512757
       */
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
        turbo: turboPlugin,
      },
      rules: {
        ...pluginJs.configs.recommended.rules,
        ...eslintCoreRules,
        ...eslintPluginUnicorn.configs.all.rules,
        "turbo/no-undeclared-env-vars": [
          "error",
          {
            allowList: ["^ENV_[A-Z]+$"],
          },
        ],
      },
    },
    /**
     * @see https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-new-eslintconfigjs
     */
    cspellESLintPluginRecommended,

    eslintPluginYml.configs["flat/recommended"],

    /**
     * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
     */
    pluginConfigPrettier,
    ...(userConfigs as Linter.Config[]),
  ]).filter(Boolean) as Linter.Config[];

/**
 * WIP
 */
export const rules: RuleOptions = {
  "unused-imports/no-unused-vars": "off",
  "turbo/no-undeclared-env-vars": [
    "error",
    {
      allowList: ["^ENV_[A-Z]+$"],
    },
  ],
};
