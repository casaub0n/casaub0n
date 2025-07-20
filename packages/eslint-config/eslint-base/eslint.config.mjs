import { defineConfig } from "eslint/config";
import base from "./dist/index.mjs";

export default defineConfig([
  // VSCode ESLint extension can't find `tsconfigRootDir`
  {
    ignores: ["**/*.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
]);
