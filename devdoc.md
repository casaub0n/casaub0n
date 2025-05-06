[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)](https://pnpm.io/)
[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white)](https://turbo.build/repo)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/casaub0n/casaub0n/actions)

This repository is experimental apps and profile readme

## require

- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)
- [Node.js](https://nodejs.org/ja)
- [Rust](https://www.rust-lang.org/)
- [vscode](https://code.visualstudio.com/)

## Set up your development environment on Windows

[Setup a development environment on Windows | Microsoft Learn](https://learn.microsoft.com/en-us/windows/dev-environment/)

### One Drive

TODO

### WinGet

### Scoop

### Dev Drive

## rm command

use TypeScript via tsx.

- Make `scripts/rrm.ts` in the root of package
- Add `scripts` directory in `tsconfig.json`
- Add `rmdist` command in `scripts` of `package.json`

**rrm.ts**

```typescript
/**
 * rm command
 * @see https://qiita.com/munieru_jp/items/7131bb2617041388622d#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%82%92%E5%86%8D%E5%B8%B0%E7%9A%84%E3%81%AB%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95
 */

import fs from "node:fs";

// eslint-disable-next-line unicorn/prefer-top-level-await -- if your tsconfig can allow top-level await, use top-level await
(async () => {
  await fs.promises.rm("./dist", { recursive: true, force: true });
})();
```

**tsconfig.json**

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  ...,
  "include": ["./src", "./scripts"]
}
```

**package.json**

```json
{
  ...,
  "scripts": {
    ...,
    "rmdist": "node --import tsx scripts/rrm.ts",
    "build": "pnpm rmdist && tsup src/index.ts --format cjs --dts",
  }
  ...
}
```

## PowerShell

**Input**

```powershell
"As they say, 'live and learn.'"
```

**Output**

```terminal
As they say, 'live and learn.'
```

## cspell

Ref:

- [VSCode に Code Spell Checker を導入して typo と戦う #VisualStudioCode - Qiita](https://qiita.com/diescake/items/98c5a099e85775cd917d)
- [cSpell で特定のファイルやパスをスペルチェック非対象にする | DevelopersIO](https://dev.classmethod.jp/articles/excluding-specific-files-and-paths-from-spell-check-with-cspell/)
- [docs/cspell.json at main · inkonchain/docs](https://github.com/inkonchain/docs/blob/main/cspell.json)

## approve-builds list

### protobufjs

renovate requires protobufjs, this is annoyed.

## textlint

https://zenn.dev/yamane_yuta/articles/65886897cefa1e

## TypeScript

[4 ステップでモダンな tsconfig.json を作る - mizdra's blog](https://www.mizdra.net/entry/2025/04/02/093100)

This is for ESM, and no bundle node_modules.

**import things**

- specific unused flag
- be strict

There is a [eslint-base config](./packages/config-eslint/tsconfig.json)

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "inlineSources": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "exactOptionalPropertyTypes": false,
    "checkJs": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "allowUnusedLabels": true,
    "allowUnreachableCode": true,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "strictNullChecks": true,
    "downlevelIteration": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "outDir": "./dist",
    "types": ["node"],
    "useDefineForClassFields": true,
    "resolveJsonModule": true,
    "noFallthroughCasesInSwitch": true,
    "erasableSyntaxOnly": true,
    "verbatimModuleSyntax": true
  },
  "include": ["./tsup.config.ts", "./src"],
  "exclude": ["node_modules", "dist"]
}
```
