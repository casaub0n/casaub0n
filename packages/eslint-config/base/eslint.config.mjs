import { defineConfig } from "eslint/config";
import base from "./dist/index.mjs";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs", "./src/types.gen.d.ts"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
  }),
]);
