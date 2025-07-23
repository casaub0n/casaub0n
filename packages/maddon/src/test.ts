/**
 * This test uses node test runner
 */

import { strict as assert } from "node:assert";
import { env } from "node:process";
import { test } from "node:test";
import puppeteer from "puppeteer";

import { markdownLink } from "./markdown-link";
import { consola } from "consola";

void test("Example Domain", async () => {
  consola.log(`chrome path: ${env.CHROME}`);
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: env.CHROME,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://example.com/");
  const title = await page.title();
  const uri = page.url();
  assert.deepStrictEqual(markdownLink(title, uri), "[Example Domain](https://example.com/)");
  await browser.close();
});
