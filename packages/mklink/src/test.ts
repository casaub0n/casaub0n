/**
 * This test uses node test runner
 */

import { strict as assert } from "assert";
import { env } from "node:process";
import { test } from "node:test";

import puppeteer from "puppeteer";

test("Example Domain", async () => {
  console.log(`chrome path: ${env.CHROME}`);
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: env.CHROME,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com/");
  const title = await page.title();
  assert.equal(title, "Example Domain");
  await browser.close();
});
