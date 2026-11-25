import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";
import nodeTest from "eslint-node-test";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
  },
  ...base({
    tsConfigRootDirectory: import.meta.dirname,
  }),
  {
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
    },
  },
  {
    files: ["**/*.test.ts"],
    plugins: {
      "node-test": nodeTest,
    },
    extends: ["node-test/recommended"],
  },
]);
