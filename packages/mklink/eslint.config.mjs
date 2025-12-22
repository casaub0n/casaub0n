import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
    },
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
  }),
]);
