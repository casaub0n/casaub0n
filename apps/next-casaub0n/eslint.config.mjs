import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-next";

export default defineConfig([
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: import.meta.dirname + "/tsconfig.json",
    rootDirectory: import.meta.dirname,
  }),
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
]);
