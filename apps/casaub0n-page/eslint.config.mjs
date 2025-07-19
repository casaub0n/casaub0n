import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-next";

export default defineConfig([
  // VSCode ESLint extension can't find `tsconfigRootDir`
  {
    ignores: ["**/eslint.config.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
    rootDirectory: import.meta.dirname,
  }),
  {
    rules: {
      "unicorn/filename-case": [
        "off",
        {
          case: "kebabCase",
          ignore: [String.raw`/./.tsx$`],
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "unicorn/no-keyword-prefix": "off",
    },
  },
]);
