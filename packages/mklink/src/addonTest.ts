/**
 * This test uses node test runner
 */

import { strict as assert } from "assert";
import { env } from "node:process";
import { test } from "node:test";
import path from "path";

import puppeteer from "puppeteer";

// import { markdownLink } from "./markdownLink";

test("Addon Test", async () => {
  console.log(`chrome path: ${env.CHROME}`);
  const pathToExtension = path.join(process.cwd(), "dist");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: env.CHROME,
    args: [`--disable-extensions-except=${pathToExtension}`, `--load-extension=${pathToExtension}`],
  });
  const page = await browser.newPage();
  await page.goto("chrome://extensions/");

  // screenshot
  page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  // /html/body/extensions-manager//div[2]/cr-view-manager/extensions-item-list//div/div/div[4]/extensions-item[1]//div[2]/div[1]/div[2]/div[1]/div/div
  // TODO: wait
  // await page.waitForSelector("body");
  // it con't be gotten tree
  const el = await page.$("html");

  if (el) {
    const hoge = await (await el.getProperty("textContent")).jsonValue();
    console.log(`el: ${hoge}`);
  }

  const title = await page.title();
  const uri = page.url();

  // assert.deepStrictEqual(markdownLink(title, uri), "[拡張機能](chrome://extensions/)");
  await browser.close();
});
