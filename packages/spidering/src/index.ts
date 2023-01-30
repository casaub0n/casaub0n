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
  const schedulePrograms = dom.window.document.getElementsByClassName("schedule-program");
  for (const scheduleProgram of schedulePrograms) {
    console.log(scheduleProgram.innerHTML);
  }
};

init();
