import base from "../../packages/eslint-config/next/dist/index.mjs";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
    rootDirectory: import.meta.dirname,
  }),
];
