import { JSDOM } from "jsdom";
import type HTMLCollectionOf from "jsdom";
import type Element from "jsdom";
import { consola } from "consola";
import { err, ok, type Result } from "neverthrow";
import { z } from "zod/mini";
import { isNil } from "es-toolkit/predicate";

export type Program = {
  title: string;
  honDate: string;
  time: string[];
};

export type ScheduleTxt = {
  contentDay: string;
  programs: Program[];
};

export type ScheduleContent = {
  img?: string[];
  txt?: ScheduleTxt[];
};

/**
 * WIP
 */
export const domCalc = (
  elements: HTMLCollectionOf<Element>,
  doElement: (element: Element) => void,
): void => {
  if (elements.length > 0) {
    for (const element of elements) {
      doElement(element);
    }
  }
};

/**
 * @todo don't show description right now
 */
export const showElementText = (
  elements: HTMLCollectionOf<HTMLElement>,
  whatShow: string,
): void => {
  for (const element of elements) {
    const elementText = element.textContent;
    consola.log(`${whatShow}: ${elementText}`);
  }
};

const removeDescription = (elements: HTMLCollectionOf<HTMLElement>): void => {
  if (elements.length > 0) {
    elements.item(0)?.remove();
    removeDescription(elements);
  }
};

const showSmallTagElement = (smallTags: HTMLCollectionOf<HTMLElement>): void => {
  for (const smallTag of smallTags) {
    const textContent = smallTag.textContent;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    textContent ? consola.log(`small tag value: ${textContent}`) : consola.log("small tag is null");
  }
};

const showPureTitle = (pureTitles: string[] | undefined, titleList: string[]): void => {
  if (!isNil(pureTitles)) {
    for (const pureTitle of pureTitles) {
      consola.log(`pure title: ${pureTitle}`);
      titleList.push(pureTitle);
    }
  }
};

export const makePureTitle = (
  title: HTMLParagraphElement,
  titleList: string[],
  honDate?: Element,
): void => {
  const descriptionDom = title.getElementsByTagName("small");
  showElementText(descriptionDom, "description");
  removeDescription(descriptionDom);

  if (honDate) {
    honDate.remove();
  }
  const smallTags = title.getElementsByTagName("small");
  showSmallTagElement(smallTags);
  const pureTitles = title.textContent.replace(/^\s+/, "").split("\n");
  showPureTitle(pureTitles, titleList);
};

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
 * @returns `<body>`
 */
export const getBody = (html: string): Result<HTMLElement, Error> => {
  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const maybeBody = dom.window.document.body;
  if (isNil(maybeBody)) return err(new Error("schedule-content is nothing"));
  return ok(maybeBody);
};

/**
 * @returns `<div class="schedule-box-main">`
 */
export const getScheduleBoxMain = (body: HTMLElement): Result<HTMLCollectionOf<Element>, Error> => {
  const scheduleBoxMain = body.getElementsByClassName("schedule-box-main");
  if (scheduleBoxMain.item.length === 0) return err(new Error("schedule-box-main is nothing"));
  if (scheduleBoxMain.namedItem.length === 0) return err(new Error("schedule-box-main is nothing"));
  if (scheduleBoxMain.length === 0) return err(new Error("schedule-box-main is nothing"));
  return ok(scheduleBoxMain);
};

export const scheduleSchema = z.object({
  scheduleBoxImg: z.array(z.string()),
});

/**
 * [JSDOM](https://github.com/jsdom/jsdom) parses html text in this function
 * @param body html string
 * @returns `<div class="schedule-content">` elements. Check the elements, follow this example;
 * @example ```
 * const maybeScheduleContents = getScheduleContents(body);
 * if (maybeScheduleContents.isOk()) {
 *   const h2collections = element.getElementsByTagName("h2");
 *   for (const h2 of h2collections) {
 *      consola.log(h2.textContent);
 *   }
 * }
 * ```
 */
export const getScheduleContents = (body: string): Result<HTMLCollectionOf<Element>, Error> => {
  const dom = new JSDOM(body, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const scheduleContents = dom.window.document.getElementsByClassName("schedule-content");
  if (scheduleContents.length > 0) return ok(scheduleContents);
  if (scheduleContents.item.length > 0) return ok(scheduleContents);
  if (scheduleContents.namedItem.length > 0) return ok(scheduleContents);
  return err(new Error("schedule-content is nothing"));
};

const init = async (): Promise<void> => {
  try {
    const imgList: string[] = [];
    const descriptionList: string[] = [];
    const maybeBody = await getBungeizaText();

    if (maybeBody.isOk()) {
      const body = maybeBody.value;
      const maybeScheduleContents = getScheduleContents(body);

      if (maybeScheduleContents.isOk()) {
        const scheduleContents = maybeScheduleContents.value;
        for (const scheduleContent of scheduleContents) {
          const h2collections = scheduleContent.getElementsByTagName("h2");
          const images = scheduleContent.getElementsByTagName("img");
          const schedulePrograms = scheduleContent.getElementsByClassName("schedule-program");
          for (const img of images) {
            consola.log(`https://www.shin-bungeiza.com${img.src}`);
            imgList.push(`https://www.shin-bungeiza.com${img.src}`);
          }
          for (const h2 of h2collections) {
            consola.log(h2.textContent);
            // TODO: convert h2.textContent to date type
          }
          for (const scheduleProgram of schedulePrograms) {
            const titles = scheduleProgram.getElementsByTagName("p");
            for (const title of titles) {
              const honDateDom = title.getElementsByClassName("hon-date");
              if (honDateDom.length > 0) {
                for (const honDate of honDateDom) {
                  consola.log(honDate.textContent);
                  makePureTitle(title, descriptionList);
                }
              } else {
                makePureTitle(title, descriptionList);
              }
            }
            const timeList = scheduleProgram.getElementsByTagName("li");
            for (const time of timeList) {
              consola.log(time.textContent);
            }
          }
          consola.log("\n\n");
        }
      }
    }
  } catch (error) {
    consola.error(error);
  }
};

void init();
