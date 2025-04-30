import base from "../eslint-config/eslint-base/dist/index.mjs";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];
