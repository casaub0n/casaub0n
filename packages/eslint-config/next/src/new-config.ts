import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @see https://github.com/sweepline/eslint-plugin-unused-imports/tree/master?tab=readme-ov-file#usage
 */
import type TSESLint from "@typescript-eslint/utils";
import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import { ignoreConfig } from "@casaub0n/eslint-config-utils/ignore-config";

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
  tsConfigurationRootDirectory = import.meta.dirname,
  rootDirectory = "apps/next-casaub0n/",
}: Readonly<{
  tsConfigurationRootDirectory: string;
  rootDirectory: string;
}>): TSESLint.TSESLint.FlatConfig.ConfigArray =>
  defineConfig([
    /**
     * @see https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40eslint%2Fjs
     */
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
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
      },
    },
  ]);

export default config;
