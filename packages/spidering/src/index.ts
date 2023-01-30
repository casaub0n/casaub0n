import got from "got";
import { JSDOM } from "jsdom";

export const response = {
  hello: "world",
} as const satisfies { [key: string]: string };

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

const init = async () => {
  const data = await got.get("https://www.shin-bungeiza.com/schedule.html");

  const dom = new JSDOM(data.body, {
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
    }
    for (const h2 of h2collections) {
      console.log(h2.textContent);
    }
    for (const scheduleProgram of schedulePrograms) {
      const titles = scheduleProgram.getElementsByTagName("p");
      for (const title of titles) {
        const honDateList = title.getElementsByClassName("hon-date");
        for (const honDate of honDateList) {
          console.log(honDate.textContent);
          // make pure title
          const discriptionList = title.getElementsByTagName("small");
          for (const discription of discriptionList) {
            console.log(discription.textContent);
            honDate.remove();
            discription.remove();
            const pureTitle = title.textContent?.replace(/^\s+/, "");
            console.log(pureTitle);
          }
        }
      }
      const timelist = scheduleProgram.getElementsByTagName("li");
      for (const time of timelist) {
        console.log(time.textContent);
      }
    }
  }
};

init();
