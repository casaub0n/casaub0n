import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  // VSCode ESLint extension can't find `tsconfigRootDir`
  {
    ignores: ["**/eslint.config.mjs", "**/dist/**"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
]);
