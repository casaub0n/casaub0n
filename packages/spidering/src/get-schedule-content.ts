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

  const SCHEDULE_CONTENT_ERROR = "schedule-content is nothing";

  // eslint-disable-next-line unicorn/no-null, eqeqeq, @typescript-eslint/no-unnecessary-condition
  if (maybeScheduleBoxMain == null || maybeScheduleBoxMain == undefined) {
    return err(new Error(SCHEDULE_CONTENT_ERROR));
  }
  if (maybeScheduleBoxMain.length === 0) {
    return err(new Error(SCHEDULE_CONTENT_ERROR));
  }
  if (maybeScheduleBoxMain.item.length === 0) {
    return err(new Error(SCHEDULE_CONTENT_ERROR));
  }
  if (maybeScheduleBoxMain.namedItem.length === 0) {
    return err(new Error(SCHEDULE_CONTENT_ERROR));
  }
  return ok(maybeScheduleBoxMain);
};

/**
 * @todo parse date list
 * @param scheduleContent
 * @returns
 */
export const getDate = (scheduleContent: Element): Result<string[], Error> => {
  const dateList = scheduleContent.getElementsByTagName("h2");
  const h2List: string[] = [];
  for (const eigeDate of dateList) {
    const h2 = eigeDate.getElementsByTagName("em");
    // eslint-disable-next-line unicorn/no-null, eqeqeq, @typescript-eslint/no-unnecessary-condition
    if (h2 == null || h2 == undefined) {
      return err(new Error("date is nothing"));
    }
    if (h2.length === 0) {
      return err(new Error("date is nothing"));
    }
    if (h2.item.length === 0) {
      return err(new Error("date is nothing"));
    }
    if (h2.namedItem.length === 0) {
      return err(new Error("date is nothing"));
    }
    // eslint-disable-next-line unicorn/no-null, eqeqeq
    if (h2.item(0) == null || h2.item(0) == undefined || h2.item(0)?.nodeValue == "") {
      return err(new Error("date is nothing"));
    }
    const h2Value = h2.item(0)?.nodeValue;
    // eslint-disable-next-line unicorn/no-null, eqeqeq, @typescript-eslint/no-unnecessary-condition
    if (h2Value == null || h2Value == undefined) {
      return err(new Error("date is nothing"));
    }
    h2List.push(h2Value);
  }
  return ok(h2List);
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
