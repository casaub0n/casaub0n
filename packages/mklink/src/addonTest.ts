/**
 * This test uses node test runner
 */

// import { strict as assert } from "assert";
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
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
      "--no-sandbox",
    ],
  });
  const page = await browser.newPage();
  await page.goto("chrome://extensions/", { waitUntil: ["networkidle0", "load"] });

  const addonElement = await page.$("extensions-manager");
  console.log(addonElement);

  await browser.close();
});
