/* eslint-disable unicorn/prefer-query-selector */
import { err, ok, type Result } from "neverthrow";
import z from "zod";
import { JSDOM } from "jsdom";

/**
 * [fetch](https://nodejs.org/ja/learn/getting-started/fetch) is pure Node.js library.
 * This function call [shin-bungeiza schedule](https://www.shin-bungeiza.com/schedule.html)
 * @returns `shin-bungeiza` html string
 * @example ```
 * const htmlText = await getBungeizaText();
 * if (htmlText.isOk()) {
 *   console.log(htmlText.value);
 * }
 * ```
 */
export const getBungeizaText = async (): Promise<Result<string, Error>> => {
  const bungeizaResponse = await fetch("https://www.shin-bungeiza.com/schedule.html");
  const body = await bungeizaResponse.text();
  if (body === "") return err(new Error("body is nothing"));
  if (body) return ok(body);
  return err(new Error("can't get"));
};

export const getScheduleContentList = (
  htmlText: string,
): Result<HTMLCollectionOf<Element>, Error> => {
  const dom = new JSDOM(htmlText, {
    runScripts: "dangerously",
    resources: "usable",
  });

  const maybeScheduleBoxMain = dom.window.document.getElementsByClassName("schedule-content");
  // eslint-disable-next-line unicorn/no-null, eqeqeq, @typescript-eslint/no-unnecessary-condition
  if (maybeScheduleBoxMain == null || maybeScheduleBoxMain == undefined) {
    return err(new Error("schedule-content is nothing"));
  }
  if (maybeScheduleBoxMain.length === 0) {
    return err(new Error("schedule-content is nothing"));
  }
  if (maybeScheduleBoxMain.item.length === 0) {
    return err(new Error("schedule-content is nothing"));
  }
  if (maybeScheduleBoxMain.namedItem.length === 0) {
    return err(new Error("schedule-content is nothing"));
  }
  return ok(maybeScheduleBoxMain);
};

export const getData = async (): Promise<void> => {
  const maybeHtmlText = await getBungeizaText();
  if (maybeHtmlText.isOk()) {
    const htmlText = maybeHtmlText.value;
    const maybeScheduleContentList = getScheduleContentList(htmlText);
    if (maybeScheduleContentList.isOk()) {
      const scheduleContentList = maybeScheduleContentList.value;
      // do schedule-box-main
      for (const scheduleContent of scheduleContentList) {
        // getScheduleMain(scheduleBoxMain);
        // TODO merge datalist
      }
    }
  }
};

/**
 * `<div class="schedule-box-main">` [zod](https://github.com/colinhacks/zod) schema
 */
export const scheduleDetail = z.object({
  images: z.array(z.string()),
  subTitle: z.string(),
  title: z.string(),
});

/**
 * `<div class="schedule-box-main">` object
 */
type ScheduleDetail = z.infer<typeof scheduleDetail>;
