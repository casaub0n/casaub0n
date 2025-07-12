import { expect, test } from "vitest";
import { getBungeizaText, getScheduleContents } from "./index";

test("Get Bungeiza html text", async () => {
  const htmlText = await getBungeizaText();
  expect(htmlText.isOk()).toBe(true);
});

test("Parse got html text", async () => {
  const htmlText = await getBungeizaText();
  if (htmlText.isOk()) {
    expect(getScheduleContents(htmlText.value).isOk()).toBe(true);
  }
});
