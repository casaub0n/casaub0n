/* eslint-disable unicorn/prefer-query-selector */
import { err, ok, type Result } from "neverthrow";
import z from "zod";
import { JSDOM } from "jsdom";
import { addMonth, addYear, parse } from "@formkit/tempo";

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

const hasDate = (wrapperElement: HTMLHeadingElement): Result<string, Error> => {
  const dateElement = wrapperElement.getElementsByTagName("em");
  // eslint-disable-next-line unicorn/no-null, eqeqeq, @typescript-eslint/no-unnecessary-condition
  if (dateElement == null || dateElement == undefined) {
    return err(new Error("date is nothing"));
  }
  if (dateElement.length === 0) {
    return err(new Error("date is nothing"));
  }
  if (dateElement.item.length === 0) {
    return err(new Error("date is nothing"));
  }
  if (dateElement.namedItem.length === 0) {
    return err(new Error("date is nothing"));
  }
  const date = dateElement.item(0)?.nodeValue;
  if (
    // eslint-disable-next-line eqeqeq, unicorn/no-null
    date == null ||
    // eslint-disable-next-line eqeqeq, @typescript-eslint/no-unnecessary-condition
    date == undefined ||
    // eslint-disable-next-line eqeqeq
    date == ""
  ) {
    return err(new Error("date is nothing"));
  }
  return ok(date);
};

/**
 * @deprecated only for test
 */
export const hasMonth = (maybeDate: string): boolean => {
  try {
    parse(maybeDate, "MM/DD");
    return true;
  } catch {
    return false;
  }
};

/**
 *
 * @param maybeDate
 * @returns ok is full date that's `YYYY/MM/DD`, error is only day that's `DD`
 */
export const haveMonth = (maybeDate: string): Result<Date, Date> => {
  try {
    const date = parse(maybeDate, "MM/DD");
    const fullDate = addYear(date, 2015);
    return ok(fullDate);
  } catch {
    const date = parse(maybeDate, "DD");
    return err(date);
  }
};

/**
 * @param scheduleContent `<div class="schedule-content">`
 * @returns
 */
export const getDate = (scheduleContent: Element): Date[] => {
  const wrapperElementList = scheduleContent.getElementsByTagName("h2");
  const dateList: Date[] = [];
  let month: number = 0;
  for (const wrapperElement of wrapperElementList) {
    const maybeDate = hasDate(wrapperElement);
    if (maybeDate.isOk()) {
      const dateRaw = maybeDate.value;
      const resultDate = haveMonth(dateRaw);
      if (resultDate.isOk()) {
        month = resultDate.value.getMonth();
        dateList.push(resultDate.value);
      }
      if (resultDate.isErr()) {
        const fullDate = addYear(addMonth(resultDate.error, month), 2015);
        dateList.push(fullDate);
      }
    }
  }
  return dateList;
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
