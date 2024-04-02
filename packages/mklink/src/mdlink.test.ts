/**
 * This test is jest version test
 */

import { env } from "node:process";

import puppeteer from "puppeteer";

describe("Example Domain", () => {
  it("markdown link", async () => {
    console.log(`chrome path: ${env.CHROME}`);
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: env.CHROME,
    });
    const page = await browser.newPage();
    await page.goto("https://example.com/");
    const title = await page.title();
    expect("Example Domain").toEqual(title);
    await browser.close();
  });
});
