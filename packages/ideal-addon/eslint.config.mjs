import base from "@casaub0n/eslint-base";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["**/*.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
  {
    rules: {
      "import/no-unresolved": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "no-console": "off",
    },
  },
]);
