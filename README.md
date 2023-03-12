# casaub0n
I live in Tokyo and I have my own business.
[This repository](https://github.com/casaub0n/casaub0n) is collected my config files, userscript and some sandbox vaporware.

## require
- Git
- Yarn
- Node.js

## environment
From the beginning, this runs on Linux, but I try to work it on Windows.

### attention
connection to turbo daemon process failed on Windows: imformation👉 https://github.com/vercel/turbo/issues/2034

## Why do I use rimraf?
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
