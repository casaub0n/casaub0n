// import { env } from "node:process";
import "dotenv/config";

import puppeteer from "puppeteer";

import { markdownLink } from "./markdownLink";

describe("Google", () => {
  it("markdown link", async () => {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    console.log(`chrome path: ${process.env.CHROME}`);
    const browser = await puppeteer.launch({
      headless: "new",
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      executablePath: process.env.CHROME,
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    expect(markdownLink(title, "https://google.com")).toBe("[Google](https://google.com)");
    await browser.close();
  });
});
