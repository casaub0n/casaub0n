[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository is experimental apps and profile readme

## require

- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)
- [Node.js](https://nodejs.org/ja)
- [Rust](https://www.rust-lang.org/)
- [vscode](https://code.visualstudio.com/)

### attention

turbo daemon process is failed on Windows: imformation👉 https://github.com/vercel/turbo/issues/2034

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

## storybook

[storybook GitHub pages](https://casaub0n.github.io/casaub0n/)

[README](./apps/catalog/README.md)
