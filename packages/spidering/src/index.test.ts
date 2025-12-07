import { expect, test } from "vitest";
import { getBungeizaText, getScheduleContents } from "./index";
import { Effect } from "effect";

test("Get Bungeiza html text", async () => {
  const htmlText = await getBungeizaText();

  Effect.runSync(
    htmlText.pipe(
      Effect.map((body) => {
        expect(body.length).toBeGreaterThanOrEqual(0);
      }),
    ),
  );
});

test("Parse got html text", async () => {
  const htmlText = await getBungeizaText();

  Effect.runSync(
    htmlText.pipe(
      Effect.map((value) => {
        Effect.runSync(
          getScheduleContents(value).pipe(
            Effect.map((scheduleContents) => {
              expect(scheduleContents.length).toBeGreaterThanOrEqual(0);
            }),
          ),
        );
      }),
    ),
  );
});
