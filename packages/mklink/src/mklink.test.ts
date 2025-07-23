/**
 * This test uses node test runner
 */

import { strict as assert } from "node:assert";
import { EVP } from "evp-ts";
import { err, ok } from "neverthrow";
import type { Result } from "neverthrow";
import { env } from "node:process";
import { test } from "node:test";
import puppeteer from "puppeteer";
import { consola } from "consola";

/**
 * Chrome path from env file
 */
const getChromePathFromEnvironment = (): Result<string, Error> => {
  const chromePath = env.CHROME;
  // eslint-disable-next-line eqeqeq, unicorn/no-null
  if (chromePath == null || chromePath == "") {
    return err(new Error("There is not env config"));
  }
  return chromePath ? ok(chromePath) : err(new Error("There is not env config"));
};

void test("Example Domain", async () => {
  const chromePath = getChromePathFromEnvironment();

  if (chromePath.isOk()) {
    const parser = EVP.object({
      CHROME: EVP.string(),
    });

    type Config = EVP.TypeOf<typeof parser>;
    const result: Config = parser.parse({ CHROME: chromePath.value });
    consola.log(`chrome path: ${result.CHROME}`);

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: env.CHROME,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("https://example.com/");
    const title = await page.title();
    assert.equal(title, "Example Domain");
    await browser.close();
  }
});
