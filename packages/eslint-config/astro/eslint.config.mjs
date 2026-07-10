import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
  }),
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
]);
