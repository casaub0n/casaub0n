import { env } from "node:process";

import puppeteer from "puppeteer";

import { markdownLink } from "./markdownLink";

describe("Google", () => {
  it("markdown link", async () => {
    console.log(`chrome path: ${env.CHROME}`);
    const browser = await puppeteer.launch({
      headless: "new",
      executablePath: env.CHROME,
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    expect(markdownLink(title, "https://google.com")).toBe("[Google](https://google.com)");
    await browser.close();
  });
});
