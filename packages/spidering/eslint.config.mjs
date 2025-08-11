import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
  {
    rules: {
      "@typescript-eslint/strict-boolean-expressions": "off",
      "import-x/no-duplicates": "off",
    },
  },
]);
