import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-astro";

export default defineConfig([
  ...base,
  {
    ignores: ["**/eslint.config.mjs", "**/env.d.ts"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/name-replacements": [
        "error",
        {
          allowList: {
            props: true,
            Props: true,
          },
        },
      ],
    },
  },
]);
