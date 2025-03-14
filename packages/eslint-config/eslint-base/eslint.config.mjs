import base from "./dist/index.mjs";

export default [
  ...base,
  {
    rules: {
      // WTF
      "@typescript-eslint/unbound-method": "off",
    },
  },
];
