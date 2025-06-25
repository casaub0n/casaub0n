import { expect, test } from "vitest";
import { getBungeizaText } from "./index";

test("Get Bungeiza html text", async () => {
  const htmlText = await getBungeizaText();
  expect(htmlText.isOk()).toBe(true);
});
