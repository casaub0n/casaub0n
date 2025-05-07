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
import pluginConfigPrettier from "eslint-config-prettier";
import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import { ignoreConfig } from "./ignore-config";
import { eslintCoreRules } from "./eslint-core-rules";
import { typescriptRules } from "./typescript-rules";

const __dirname = import.meta.dirname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * **Usage** is at README because this eslint-config compile to a ESM file in dist.
 *
 * So, the user will call a compiled ESM file into their `eslint.config.mjs`.
 * @param tsconfigFileName `./tsconfig.json`
 * @param tsconfigRootDir `import.meta.dirname` [The directory name of the current module. This is the same as the `path.dirname()` of the `import.meta.filename`.](https://nodejs.org/api/esm.html#importmetadirname)
 * @example ```javascript
 * import { defineConfig } from "eslint/config";
 * import base from "@casaub0n/eslint-base";
 *
 * export default defineConfig([
 *   ...base({
 *     tsconfigRootDir: import.meta.dirname,
 *     tsconfigFileName: "./tsconfig.json",
 *   }),
 * ]);
 * ```
 */
const config = ({
  tsconfigFileName = "./tsconfig.json",
  // eslint-disable-next-line unicorn/prevent-abbreviations
  tsconfigRootDir = import.meta.dirname,
}: Readonly<{
  tsconfigFileName: string;
  tsconfigRootDir: string;
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
        ...compat.extends(),
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
        ...eslintCoreRules,
        ...typescriptRules,

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
     * @see https://github.com/ota-meshi/eslint-plugin-astro?tab=readme-ov-file#configuration
     */
    ...eslintPluginAstro.configs.recommended,

    /**
     * https://zenn.dev/kazukix/articles/eslint-config-2024-09#eslint-config-prettier
     */
    pluginConfigPrettier,
  ]);

export default config;
