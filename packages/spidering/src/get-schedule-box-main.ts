/* eslint-disable unicorn/prefer-query-selector */
import consola from "consola";
import { JSDOM } from "jsdom";
import { err, ok, type Result } from "neverthrow";
import z from "zod";

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

/**
 * [JSDOM](https://github.com/jsdom/jsdom) parses html text in this function
 * @param html html string
 * @returns `<div class="schedule-box-main">`
 */
export const getScheduleBoxMainList = (html: string): Result<HTMLCollectionOf<Element>, Error> => {
  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

  const maybeScheduleBoxMain = dom.window.document.getElementsByClassName("schedule-box-main");
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

/**
 * @param scheduleBoxMain parsed JSDOM
 * @returns
 */
const getImageList = (scheduleBoxMain: Element): string[] => {
  const scheduleBoxImgElement = scheduleBoxMain.getElementsByClassName("schedule-box-img");
  const imageList: string[] = [];

  const slickSlideCollection = scheduleBoxImgElement.item(0)?.getElementsByClassName("slick-slide");

  // null check
  if (
    // eslint-disable-next-line eqeqeq, unicorn/no-null
    slickSlideCollection == null ||
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, eqeqeq
    slickSlideCollection == undefined ||
    slickSlideCollection.length === 0 ||
    slickSlideCollection.item.length === 0 ||
    slickSlideCollection.namedItem.length === 0
  ) {
    return imageList;
  }

  for (const slickSlide of slickSlideCollection) {
    const image = slickSlide.getElementsByTagName("img").item(0);

    // eslint-disable-next-line eqeqeq, @typescript-eslint/no-unnecessary-condition, unicorn/no-null
    if (image == null || image == undefined) {
      return imageList;
    }

    const imageUrl = image.getAttribute("src");

    // eslint-disable-next-line eqeqeq, @typescript-eslint/no-unnecessary-condition, unicorn/no-null
    if (imageUrl == null || imageUrl == undefined) {
      return imageList;
    }

    imageList.push("https://www.shin-bungeiza.com" + imageUrl);
  }
  return imageList;
};

export const getTitle = (scheduleBoxMain: Element): string => {
  const scheduleH1Collection = scheduleBoxMain.getElementsByTagName("h1");
  let title = "";
  for (const scheduleH1 of scheduleH1Collection) {
    title += scheduleH1.textContent + "\n";
  }
  return title;
};

export const getSubTitle = (scheduleBoxMain: Element): string => {
  const scheduleTxtCatchCollection = scheduleBoxMain.getElementsByClassName("schedule-txt-catch");
  let subTitle = "";
  for (const scheduleTxtCatch of scheduleTxtCatchCollection) {
    subTitle += scheduleTxtCatch.textContent;
  }
  return subTitle;
};

export const getScheduleMain = (scheduleBoxMain: Element): ScheduleMain => {
  const schedule: ScheduleMain = {
    images: getImageList(scheduleBoxMain),
    subTitle: getSubTitle(scheduleBoxMain),
    title: getTitle(scheduleBoxMain),
  };
  consola.log(schedule);
  return schedule;
};

export const getData = async (): Promise<void> => {
  const maybeHtmlText = await getBungeizaText();
  if (maybeHtmlText.isOk()) {
    const htmlText = maybeHtmlText.value;
    const maybeScheduleBoxMainList = getScheduleBoxMainList(htmlText);
    if (maybeScheduleBoxMainList.isOk()) {
      const scheduleBoxMainList = maybeScheduleBoxMainList.value;
      // do schedule-box-main
      for (const scheduleBoxMain of scheduleBoxMainList) {
        getScheduleMain(scheduleBoxMain);
        // TODO merge datalist
      }
    }
  }
};

/**
 * `<div class="schedule-box-main">` [zod](https://github.com/colinhacks/zod) schema
 */
export const scheduleMain = z.object({
  images: z.array(z.string()),
  subTitle: z.string(),
  title: z.string(),
});

/**
 * `<div class="schedule-box-main">` object
 */
type ScheduleMain = z.infer<typeof scheduleMain>;
