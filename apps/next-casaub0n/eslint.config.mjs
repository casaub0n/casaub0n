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
  },
]);
