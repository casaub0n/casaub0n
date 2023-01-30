import got from "got";
import { JSDOM } from "jsdom";

export const response = {
  hello: "world",
} as const satisfies { [key: string]: string };

export type Program = {
  title: string;
  time: string;
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
  console.log(`schedule content length: ${scheduleContentDom.length}`);
  // const scheduleData = dom.window.document.querySelectorAll(".schedule-content-txt > h2");
  // for (const scheduleProgram of scheduleData) {
  //   console.log(scheduleProgram.textContent);
  // }
  for (const element of scheduleContentDom) {
    // const imgs = element.querySelectorAll(".slick-slide > img");
    const images = element.getElementsByTagName("img");
    for (let img of images) {
      console.log(`https://www.shin-bungeiza.com${img.src}`);
    }
  }
};

init();
