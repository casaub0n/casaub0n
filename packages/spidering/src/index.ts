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

export const makePureTitle = (
  title: HTMLParagraphElement,
  discriptionList: string[],
  titleList: string[],
  honDate?: Element,
  honDateList?: string[],
): void => {
  const discriptionDom = title.getElementsByTagName("small");
  console.log(`discription length: ${discriptionDom.length.toString()}`);
  for (const discription of discriptionDom) {
    const pureDiscription = discription.textContent;
    if (pureDiscription !== null) {
      console.log(`discription: ${pureDiscription}`);
      discriptionList.push(pureDiscription);
    }
  }
  const removeDiscription = (dom: HTMLCollectionOf<HTMLElement>): void => {
    if (dom.length > 0) {
      dom.item(0)?.remove();
      removeDiscription(dom);
    }
  };
  removeDiscription(discriptionDom);

  if (honDate && honDateList) {
    const pureHonDate = honDate.textContent;
    if (pureHonDate !== null) {
      honDateList.push(pureHonDate);
    }
    honDate.remove();
  }
  const hogeSmall = title.getElementsByTagName("small");
  console.log(`small tag length: ${hogeSmall.length.toString()}`);

  for (const hoge of hogeSmall) {
    const textContent = hoge.textContent;
    textContent ? console.log(`small tag value: ${textContent}`) : console.log("small tag is null");
  }

  const pureTitles = title.textContent?.replace(/^\s+/, "").split("\n");
  if (pureTitles != null) {
    for (const pureTitle of pureTitles) {
      console.log(`pure title: ${pureTitle}`);
      titleList.push(pureTitle);
    }
  }

  // for (const discription of discriptionDom) {
  //   console.log(`discription: ${discription.textContent}`);
  //   const pureDiscription = discription.textContent;
  //   if (pureDiscription) {
  //     discriptionList.push(pureDiscription);
  //   }
  //   if (honDate && honDateList) {
  //     const pureHonDate = honDate.textContent;
  //     if (pureHonDate) {
  //       honDateList.push(pureHonDate);
  //     }
  //     honDate.remove();
  //   }
  //   discription.remove();
  //   const pureTitle = title.textContent?.replace(/^\s+/, "");
  //   console.log(`pure title: ${pureTitle}`);
  //   if (pureTitle) {
  //     titleList.push(pureTitle);
  //   }
  // }
};

const init = async (): Promise<void> => {
  try {
    // const data = await got.get("https://www.shin-bungeiza.com/schedule.html");

    const imgList: string[] = [];
    const honDateList: string[] = [];
    const discriptionList: string[] = [];
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
              makePureTitle(title, discriptionList, titleList, honDate, honDateList);
            }
          } else {
            makePureTitle(title, discriptionList, titleList);
          }
        }
        const timelist = scheduleProgram.getElementsByTagName("li");
        for (const time of timelist) {
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
