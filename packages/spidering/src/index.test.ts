import { expect, onTestFailed, test } from "vitest";
import { getBungeizaText, getScheduleContents } from "./index";

test("Get Bungeiza html text", async () => {
  const htmlText = await getBungeizaText();
  expect(htmlText.isOk()).toBe(true);
});

test("Parse got html text", async () => {
  const htmlText = await getBungeizaText();
  if (htmlText.isErr()) {
    onTestFailed(({ task }) => {
      // eslint-disable-next-line no-console -- we don't wanna use lib in test.
      console.log(task.result?.errors);
    });
  }
  if (htmlText.isOk()) {
    expect(getScheduleContents(htmlText.value).isOk()).toBe(true);
  }
});
