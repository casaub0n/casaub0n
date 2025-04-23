/* eslint-disable @cspell/spellchecker -- @todo add dictionary */
import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.ts",

  /**
   * This package for development
   */
  platform: "node",

  /**
   * @todo Compare bundle size
   */
  treeshake: true,

  /**
   * Minification is powered by oxc-minifier, which is currently still work-in-progress.
   * Current Rolldown version is 1.0.0-beta.7
   */
  output: {
    /**
     * This option is required by `platform` because of multiple chunks to run Node.js native dependencies.
     */
    inlineDynamicImports: true,
    file: "dist/index.js",

    /**
     * `iife` opiton miss node native packages that's `node:something`
     * ```
     * [MISSING_GLOBAL_NAME] Warning: No name was provided for external module "node:util" in "output.globals" – guessing "node_util".
     * ```
     */
    format: "esm",
  },
});
