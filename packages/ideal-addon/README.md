# Chrome Extension boilerplate

https://zenn.dev/sui_water/articles/7d7daef8f4d057

## testing design

The strategy is E2E first that means using puppeteer as headless browser in testing,

therefore native node test runner is better than jest because jest can't stop when e2e testing is failed.

### TODO

`node --no-warnings --loader tsx src/test.ts` can't run with dotenv. Right now, it uses cross-env. cross-env only allows to specify directly path on npm script.

## ref

https://yuki.world/how-to-develop-chrome-extension-basics/#t_2_manifestjsonpopuphtml
