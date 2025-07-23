/**
 * This test is jest version test
 */

import { env } from "node:process";
import puppeteer from "puppeteer";

import { markdownLink } from "./markdown-link";
import { consola } from "consola";

describe("Example Domain", () => {
  it("markdown link", async () => {
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
    consola.log(markdownLink(title, uri));
    expect(markdownLink(title, uri)).toBe("[Example Domain](https://example.com/)");
    await browser.close();
  });
});
