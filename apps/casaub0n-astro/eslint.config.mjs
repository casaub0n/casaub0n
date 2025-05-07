import base from "@casaub0n/eslint-config-astro";

export default [
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
];
