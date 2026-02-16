import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-next";

export default defineConfig([
  {
    ignores: ["**/eslint.config.mjs"],
  },
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    rootDirectory: import.meta.dirname,
  }),
  {
    ignores: [
      /**
       * Next.js
       */
      "**/.next/",
      "**/.tubo/",
      "**/next-env.d.ts",
    ],
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
      "unicorn/prevent-abbreviations": "off",
      "no-console": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "unicorn/consistent-function-scoping": "off",
    },
  },
]);
