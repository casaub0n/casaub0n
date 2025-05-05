import base from "@casaub0n/eslint-base";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];
