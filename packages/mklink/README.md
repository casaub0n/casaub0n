# Chrome Extension boilerplate

## bundler design

- [Mark all node_modules as external · Issue #289 · egoist/tsup](https://github.com/egoist/tsup/issues/289#issuecomment-1382492040)
- [error: Invalid define: --define:process.env.NODE_ENV=development · Issue #44 · evanw/esbuild](https://github.com/evanw/esbuild/issues/44#issuecomment-606719394)

## testing design

The strategy is E2E first that means using puppeteer as headless browser in testing,

thereforce native node test runner is better than jest because jest can't stop when e2e testing is failed.

### TODO

`node --no-warnings --loader tsx src/test.ts` can't run with dotenv. Righ now, it uses cross-env. cross-env only allows to specify directly path on npm script.

## ref

https://yuki.world/how-to-develop-chrome-extension-basics/#t_2_manifestjsonpopuphtml
