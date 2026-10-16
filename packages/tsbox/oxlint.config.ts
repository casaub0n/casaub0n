import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
  },
  globals: {
    dataLayer: "readonly",
  },
  plugins: ["unicorn"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [".astro$"],
      },
    ],
  },
  options: {
    typeAware: true,
  },
});
