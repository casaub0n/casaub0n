import base from "@casaub0n/eslint-base";

const baseEslint = [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];

export default baseEslint;
