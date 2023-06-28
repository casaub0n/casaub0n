import puppeteer from "puppeteer";

import { markdownLink } from "./markdownLink";

describe("Google", () => {
  it("markdown link", async () => {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    expect(markdownLink(title, "https://google.com")).toBe("[Google](https://google.com)");
    await browser.close();
  });
});
