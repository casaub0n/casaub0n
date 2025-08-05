import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-react";

export default defineConfig([
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      /**
       * [eslint-plugin-unicorn/docs/rules/prevent-abbreviations.md at main · sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md#options)
       */
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            props: {
              properties: false,
            },
            utils: {
              utilities: false,
            },
          },
        },
      ],
      /**
       * [eslint-plugin-unicorn/docs/rules/no-keyword-prefix.md at v60.0.0 · sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v60.0.0/docs/rules/no-keyword-prefix.md#disallowedprefixes)
       */
      "unicorn/no-keyword-prefix": ["error", { disallowedPrefixes: ["className"] }],
    },
  },
]);
