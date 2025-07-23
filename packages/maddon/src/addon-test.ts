/**
 * This test uses node test runner
 */

import { strict as assert } from "node:assert";
import { env } from "node:process";
import { test } from "node:test";
import path from "node:path";
import puppeteer from "puppeteer";
import { consola } from "consola";

import { markdownLink } from "./markdown-link";

void test("Addon Test", async () => {
  consola.log(`chrome path: ${env.CHROME}`);
  const pathToExtension = path.join(process.cwd(), "dist");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: env.CHROME,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
      "--no-sandbox",
    ],
  });
  const page = await browser.newPage();
  await page.goto("chrome://extensions/");

  // screenshot
  void page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  // /html/body/extensions-manager//div[2]/cr-view-manager/extensions-item-list//div/div/div[4]/extensions-item[1]//div[2]/div[1]/div[2]/div[1]/div/div
  // TODO: wait
  // await page.waitForSelector("body");
  // it con't be gotten tree
  const element = await page.$("html");

  if (element) {
    // eslint-disable-next-line unicorn/no-await-expression-member
    const elementJsonValue = await (await element.getProperty("textContent")).jsonValue();
    consola.log(`el: ${elementJsonValue}`);
  }

  const title = await page.title();
  const uri = page.url();

  assert.deepStrictEqual(markdownLink(title, uri), "[拡張機能](chrome://extensions/)");
  await browser.close();
});
