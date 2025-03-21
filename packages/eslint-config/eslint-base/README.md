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
