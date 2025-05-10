# `@casaub0n/eslint-config-next`

[![badge](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org/docs/latest/use/configure/)

This eslint config is for Next.js, and the config is flat config. Check [peerDependencies](./package.json).

## Usage

1. Add `"@casaub0n/eslint-config-next": "workspace:*"` in devDependencies in `package.json`, and then `pnpm install` on a root directory.
1. Make `eslint.config.mjs` on the root of a project.

This is a example eslint config.

Use `tsconfigRootDir` and `tsconfigFileName` to point tsconfig.json location. `rootDirectory` points current working directory.

```js
import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-base";

export default defineConfig([
  ...base({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
    rootDirectory: import.meta.dirname,
  }),
]);
```
