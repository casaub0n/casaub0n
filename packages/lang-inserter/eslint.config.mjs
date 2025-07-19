import base from "@casaub0n/eslint-base";

const baseEslint = [
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];

export default baseEslint;
