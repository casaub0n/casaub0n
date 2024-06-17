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

## Why do I use rimraf

As `Node.js >= v14.14.0`, it can replace rimraf with `node -e 'fs.rmSync(`dist`, {recursive:true, force:true})'`

[npm scripts で rimraf を使わずディレクトリを再帰的に削除する](https://zenn.dev/aumy/articles/node-e-fs-promises-rm-rimraf-recursive-true)

But in PowerShell, a single-quoted string in a double-quoted string works different

### Input

```powershell
"As they say, 'live and learn.'"
```

### Output

```terminal
As they say, 'live and learn.'
```

## Projects

- [dotfiles](../dotfiles/README.md)
- [Test Driven Development by Example](../test-driven-development-by-example/README.md)
- [userscript header](../ush/README.md)
- [casaub0n pages](../../apps/casaub0n-page/README.md)
- [casaub0n astro](../../apps/casaub0n-astro/README.md)
- [catalog - storybook](../../apps/catalog/README.md)
- [My web addon](../maddon/README.md)

**rust project**

- [direct2d](../crates/direct2d)

## storybook

[storybook GitHub pages](https://casaub0n.github.io/casaub0n/)

[README](./apps/catalog/README.md)
