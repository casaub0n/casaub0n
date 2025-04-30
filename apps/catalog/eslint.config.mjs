import base from "../config-eslint/base.mjs";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];
