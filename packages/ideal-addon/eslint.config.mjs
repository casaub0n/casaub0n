import base from "../config-eslint/base.mjs";

export default [
  ...base,
  {
    rules: {
      "import/no-unresolved": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "no-console": "off",
    },
  },
];
