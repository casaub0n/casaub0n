/* eslint-disable unicorn/prefer-query-selector */
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

const getImageList = (scheduleBoxMain: Element): string[] => {
  const scheduleBoxImgElement = scheduleBoxMain.getElementsByClassName("schedule-box-img");
  const imageList: string[] = [];
  for (const scheduleBoxImg of scheduleBoxImgElement) {
    const slickSlideElement = scheduleBoxImg.getElementsByClassName("slick-slide");
    for (const slickSlide of slickSlideElement) {
      const imgElement = slickSlide.getElementsByTagName("img");
      for (const image of imgElement) {
        const imageUrl = image.getAttribute("src");
        if (imageUrl !== null) {
          imageList.push(imageUrl);
        }
      }
    }
  }
  return imageList;
};

export const getDate = async (): Promise<void> => {
  const maybeText = await getBungeizaText();
  if (maybeText.isOk()) {
    const text = maybeText.value;
    const maybeScheduleBoxMainList = getScheduleBoxMainList(text);
    if (maybeScheduleBoxMainList.isOk()) {
      const scheduleBoxMainList = maybeScheduleBoxMainList.value;
      for (const scheduleBoxMain of scheduleBoxMainList) {
        const schedule: ScheduleMain = {
          images: getImageList(scheduleBoxMain),
        };
      }
    }
  }
};

export const scheduleMainSchema = z.object({
  images: z.array(z.string()),
});

type ScheduleMain = z.infer<typeof scheduleMainSchema>;
