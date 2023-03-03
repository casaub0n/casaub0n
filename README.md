# casaub0n
I live in Tokyo and I have my own business.
[This repository](https://github.com/casaub0n/casaub0n) is collected my config files, userscript and some sandbox vaporware.

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
