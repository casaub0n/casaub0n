import base from "./dist/index.mjs";

export default [
  ...base,
  {
    rules: {
      "no-console": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "unicorn/no-null": "off",
    },
  },
];
