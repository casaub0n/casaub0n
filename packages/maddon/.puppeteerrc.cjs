// @ts-check

// eslint-disable-next-line unicorn/import-style, @typescript-eslint/no-require-imports, no-undef
const { join } = require("node:path");

/**
 * @type {import("puppeteer").Configuration}
 */
// eslint-disable-next-line no-undef
module.exports = {
  // Changes the cache location for Puppeteer.
  // eslint-disable-next-line no-undef
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
