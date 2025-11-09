import { defineConfig } from "eslint/config";
import base from "./dist/index.mjs";

export default defineConfig([
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
]);
