import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
  },
  globals: {
    dataLayer: "readonly",
  },
  plugins: ["jsx-a11y", "unicorn"],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [".astro$"],
      },
    ],
    // "unicorn/prevent-abbreviations": "off",
    // "unicorn/name-replacements": [
    //   "error",
    //   {
    //     allowList: {
    //       props: true,
    //     },
    //   },
    // ],
  },
  options: {
    typeAware: true,
  },
});
