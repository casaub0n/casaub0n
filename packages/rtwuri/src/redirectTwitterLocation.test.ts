import puppeteer from "puppeteer";

describe("Google", () => {
  it('should display "google" text on page', async () => {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await expect(page.title()).resolves.toMatch("Google");
    await browser.close();
  });
});
