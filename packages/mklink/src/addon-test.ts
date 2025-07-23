/**
 * This test uses node test runner
 */

// import { strict as assert } from "assert";
import { env } from "node:process";
import { test } from "node:test";
import path from "node:path";
import puppeteer from "puppeteer";
import { consola } from "consola";

// import { markdownLink } from "./markdownLink";

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
  // eslint-disable-next-line @cspell/spellchecker
  await page.goto("chrome://extensions/", { waitUntil: ["networkidle0", "load"] });

  const addonElement = await page.$("extensions-manager");
  consola.log(addonElement);

  await browser.close();
});
