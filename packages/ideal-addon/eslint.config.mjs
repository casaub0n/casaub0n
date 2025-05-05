import base from "@casaub0n/eslint-base";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
  {
    rules: {
      "import/no-unresolved": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "no-console": "off",
    },
  },
];
