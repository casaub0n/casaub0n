/* eslint-disable unicorn/prefer-query-selector */
import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import type HTMLCollectionOf from "jsdom";
import type Element from "jsdom";

export const response = {
  hello: "world",
} as const satisfies Record<string, string>;

export interface Program {
  title: string;
  honDate: string;
  time: string[];
}

export interface ScheduleTxt {
  contentDay: string;
  programs: Program[];
}

export interface ScheduleContent {
  img?: string[];
  txt?: ScheduleTxt[];
}

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
) => {
  for (const element of elements) {
    const elementText = element.textContent;
    if (elementText !== null) {
      console.log(`${whatShow}: ${elementText}`);
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

export const makePureTitle = (
  title: HTMLParagraphElement,
  descriptionList: string[],
  titleList: string[],
  honDate?: Element,
  honDateList?: string[],
): void => {
  const descriptionDom = title.getElementsByTagName("small");
  console.log(`description length: ${descriptionDom.length.toString()}`);
  showElementText(descriptionDom, "description", descriptionList);
  removeDescription(descriptionDom);

  if (honDate && honDateList) {
    const pureHonDate = honDate.textContent;
    if (pureHonDate !== null) {
      honDateList.push(pureHonDate);
    }
    honDate.remove();
  }
  const smallTags = title.getElementsByTagName("small");
  console.log(`small tag length: ${smallTags.length.toString()}`);

  for (const smallTag of smallTags) {
    const textContent = smallTag.textContent;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    textContent ? console.log(`small tag value: ${textContent}`) : console.log("small tag is null");
  }

  const pureTitles = title.textContent?.replace(/^\s+/, "").split("\n");
  // eslint-disable-next-line unicorn/no-null
  if (pureTitles != null) {
    for (const pureTitle of pureTitles) {
      console.log(`pure title: ${pureTitle}`);
      titleList.push(pureTitle);
    }
  }
};

const init = async (): Promise<void> => {
  try {
    // const data = await got.get("https://www.shin-bungeiza.com/schedule.html");

    const imgList: string[] = [];
    const honDateList: string[] = [];
    const descriptionList: string[] = [];
    const titleList: string[] = [];

    const bungeizaResponse = await fetch("https://www.shin-bungeiza.com/schedule.html");
    const body = await bungeizaResponse.text();

    const dom = new JSDOM(body, {
      runScripts: "dangerously",
      resources: "usable",
    });
    const scheduleContentDom = dom.window.document.getElementsByClassName("schedule-content");
    for (const element of scheduleContentDom) {
      const h2collections = element.getElementsByTagName("h2");
      const images = element.getElementsByTagName("img");
      const schedulePrograms = element.getElementsByClassName("schedule-program");
      for (const img of images) {
        console.log(`https://www.shin-bungeiza.com${img.src}`);
        imgList.push(`https://www.shin-bungeiza.com${img.src}`);
      }
      for (const h2 of h2collections) {
        console.log(h2.textContent);
        // TODO: convert h2.textContent to date type
      }
      for (const scheduleProgram of schedulePrograms) {
        const titles = scheduleProgram.getElementsByTagName("p");
        for (const title of titles) {
          const honDateDom = title.getElementsByClassName("hon-date");
          if (honDateDom.length > 0) {
            for (const honDate of honDateDom) {
              console.log(honDate.textContent);
              makePureTitle(title, descriptionList, titleList, honDate, honDateList);
            }
          } else {
            makePureTitle(title, descriptionList, titleList);
          }
        }
        const timeList = scheduleProgram.getElementsByTagName("li");
        for (const time of timeList) {
          console.log(time.textContent);
        }
      }
      console.log("\n\n");
    }
  } catch (error) {
    console.error(error);
  }
};

void init();
