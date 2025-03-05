import base from "../eslint-config/eslint-base/dist/index.mjs";

export default [
  ...base,
  {
    rules: {
      "import/no-unresolved": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "no-console": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
];
