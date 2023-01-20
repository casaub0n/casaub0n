import { JSDOM } from "jsdom";

const htmpParse = (htmlText: string): void => {
  try {
    const dom = new JSDOM(htmlText, {
      runScripts: "dangerously",
      resources: "usable",
    });
    const txt = dom.window.document.title;
    console.log(`txt: `, txt);
  } catch (e) {
    console.error(e);
  }
};

const init = () => {
  const testHtml = `<html><head><title>Chu!</title></head><body><h1>hello</h1></body></html>`;
  htmpParse(testHtml);
};

init();
