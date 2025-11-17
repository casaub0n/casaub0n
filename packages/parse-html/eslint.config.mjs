import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
  }),
]);
