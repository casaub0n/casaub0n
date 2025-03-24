# Header Inserter

Inserting header in your bundle JavaScript file.

## Usage

### Installation

**npm**

```console
npm install --save-dev header-inserter
```

**pnpm**

```console
pnpm add -D header-inserter
```

### Make Essential files

`userscript` like this;

```json
{
  "name": "add badge for action link",
  "namespace": "https://github.com/casaub0n",
  "version": "0.1",
  "description": "add badge for action link",
  "author": "casaub0n",
  "match": "https://github.com/*/*/actions*",
  "grant": "none",
  "sameversion": true
}
```

`package.json` like this;

```json
{
  "name": "your-project",
  "scripts": {
    "build": "tsx build.ts && header-inserter dist/index.js"
  },
  "devDependencies": {
    "header-inserter": "latest"
  }
}
```

## Parser

I compared zod to validbot by after builded files.

- validbot: 10314 bite
- zod: 64964 bite
