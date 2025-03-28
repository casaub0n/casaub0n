# `@casaub0n/eslint-config`

This is flat config.

## Usage

Make `eslint.config.mjs` on the root of a project.

This is a example, be strict in the beginning.

```js
import base from "../eslint-config/eslint-base/dist/index.mjs";

export default [
  ...base,
  {
    rules: {
      "no-console": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
];
```

## Warning

```console
> @casaub0n/eslint-base@0.0.0 lint casaub0n\packages\eslint-config\eslint-base
> eslint src/**

node:internal/modules/cjs/loader:1228
  throw err;
  ^

Error: Cannot find module 'casaub0n\node_modules\.pnpm\eslint@9.22.0_jiti@1.21.7\node_modules\eslint\bin\eslint.js'
    at Function._resolveFilename (node:internal/modules/cjs/loader:1225:15)
    at Function._load (node:internal/modules/cjs/loader:1055:27)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.14.0
 ELIFECYCLE  Command failed with exit code 1.
```
