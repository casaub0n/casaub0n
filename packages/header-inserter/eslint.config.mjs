import base from "../eslint-config/eslint-base/dist/index.mjs";

export default [
  ...base,
  {
    rules: {
      "import/no-unresolved": "off",
    },
  },
];
