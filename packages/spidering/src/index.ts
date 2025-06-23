/* eslint-disable unicorn/prefer-query-selector */
import { JSDOM } from "jsdom";
// import fetch from "node-fetch";
import type HTMLCollectionOf from "jsdom";
import type Element from "jsdom";
import { consola } from "consola";
import { err, ok, type Result } from "neverthrow";

export const response = {
  hello: "world",
} as const satisfies Record<string, string>;

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
  state: string[],
): void => {
  for (const element of elements) {
    const elementText = element.textContent;
    if (elementText !== null) {
      consola.log(`${whatShow}: ${elementText}`);
      // WIP
      state.push(elementText);
    }
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
  // eslint-disable-next-line unicorn/no-null, eqeqeq
  if (pureTitles != null) {
    for (const pureTitle of pureTitles) {
      consola.log(`pure title: ${pureTitle}`);
      titleList.push(pureTitle);
    }
  }
};

export const makePureTitle = (
  title: HTMLParagraphElement,
  descriptionList: string[],
  titleList: string[],
  honDate?: Element,
): void => {
  const descriptionDom = title.getElementsByTagName("small");
  consola.log(`description length: ${descriptionDom.length.toString()}`);
  showElementText(descriptionDom, "description", descriptionList);
  removeDescription(descriptionDom);

  if (honDate) {
    honDate.remove();
  }
  const smallTags = title.getElementsByTagName("small");
  consola.log(`small tag length: ${smallTags.length.toString()}`);
  showSmallTagElement(smallTags);
  const pureTitles = title.textContent?.replace(/^\s+/, "").split("\n");
  showPureTitle(pureTitles, titleList);
};

/**
 * @returns `shin-bungeiza` html string
 */
export const getBungeizaText = async (): Promise<Result<string, Error>> => {
  const bungeizaResponse = await fetch("https://www.shin-bungeiza.com/schedule.html");
  const body = await bungeizaResponse.text();
  if (body) return ok(body);
  return err(new Error("can't get"));
};

/**
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
    const titleList: string[] = [];

    const body = await getBungeizaText();

    if (body.isOk()) {
      const maybeScheduleContents = getScheduleContents(body.value);

      if (maybeScheduleContents.isOk()) {
        const scheduleContents = maybeScheduleContents.value;
        for (const element of scheduleContents) {
          const h2collections = element.getElementsByTagName("h2");
          const images = element.getElementsByTagName("img");
          const schedulePrograms = element.getElementsByClassName("schedule-program");
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
                  makePureTitle(title, descriptionList, titleList, honDate);
                }
              } else {
                makePureTitle(title, descriptionList, titleList);
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
