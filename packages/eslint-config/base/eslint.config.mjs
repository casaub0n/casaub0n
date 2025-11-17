import { defineConfig } from "eslint/config";
import base from "./dist/index.mjs";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
  }),
]);
