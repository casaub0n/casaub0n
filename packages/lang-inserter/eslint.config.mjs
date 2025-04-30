import base from "../eslint-config/eslint-base/dist/index.mjs";

const baseEslint = [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];

export default baseEslint;
