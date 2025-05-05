import { defineConfig } from "eslint/config";
import base from "../../eslint-config/next/dist/index.mjs";

export default defineConfig([
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
]);
