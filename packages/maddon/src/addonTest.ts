/**
 * This test uses node test runner
 */

import { strict as assert } from "assert";
import { env } from "node:process";
import { test } from "node:test";

import puppeteer from "puppeteer";
import path from "path";

import { markdownLink } from "./markdownLink";

test("Addon Test", async () => {
  console.log(`chrome path: ${env.CHROME}`);
  const pathToExtension = path.join(process.cwd(), "dist");
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: env.CHROME,
    args: [`--disable-extensions-except=${pathToExtension}`, `--load-extension=${pathToExtension}`],
  });
  const page = await browser.newPage();
  await page.goto("chrome://extensions/");
  const title = await page.title();
  const uri = page.url();
  page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  assert.deepStrictEqual(markdownLink(title, uri), "[拡張機能](chrome://extensions/)");

  await browser.close();
});
