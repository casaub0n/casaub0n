import fs from "fs/promises";
import path from "path";

import { glob } from "glob";
import { JSDOM } from "jsdom";

import { DoSomethingError, Failure, Success } from "./utils/Result";

import type { Result } from "./utils/Result";

const readData = (filePath: string): Result<string, DoSomethingError> => {
  const htmlStr = path.join(process.cwd(), filePath);
  if (htmlStr) return new Success(htmlStr + "/*");
  return new Failure(new DoSomethingError());
};

/**
 * the numbers array of filtered column
 */
const filterNum = [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22];

/**
 * filter useful value and then, make a table html string
 * @param tableElement get table element like this: // dom.window.document.getElementById("somethingId")
 * @param month In this project, just use file suffix
 * @returns
 */
const filterTable = (tableElement: HTMLElement, month: number): string => {
  let str = `<h2>${month}${process.env.TABLE_HEAD}</h2>\n<table id='scrTable' border="1" style="border-collapse:collapse; font-size:0.025em">\n`;
  const trArray = tableElement.getElementsByTagName("tr");
  for (const tr of trArray) {
    str += "<tr align='center'height:20px;'>\n";
    const tdArray = tr.getElementsByTagName("td");
    for (let i = 0; i < tdArray.length; i++) {
      const td = tdArray[i];
      if (filterNum.includes(i)) {
        str += `<td>${td.textContent}</td>\n`;
      }
    }
    str += "</tr>\n";
  }
  str += "</table>\n";
  return str;
};

/**
 * read html file
 * @param htmlText
 * @param month
 * @returns
 */
const getContent = (htmlText: string, month: number): Result<string, DoSomethingError> => {
  const dom = new JSDOM(htmlText, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const tableElement = dom.window.document.getElementById("scrTable");
  if (tableElement) return new Success(filterTable(tableElement, month));
  return new Failure(new DoSomethingError());
};

const preTag = '<div class="calc-table">' as const satisfies string;
const endTag = "</div>" as const satisfies string;

/**
 * html template for generated element
 */
const preHtmlTag = `
<!DOCTYPE html>
<html lang="ja" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>calc view</title>
  <script type="module">
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  </script>
  <meta name="theme-color" content="#FF00FF">
</head>

<body>
` as const satisfies string;

const endHtmlTag = `
</body>
</html>
` as const satisfies string;

const makeHtmlFile = async (str: string): Promise<void> => {
  const filePath = path.join(process.cwd(), "./dist/hello.html");
  await fs.writeFile(filePath, str, "utf-8");
};

export const filterHtml = () => {
  const month_html = readData("./src/input_data");
  if (month_html.isSuccess()) {
    glob(month_html.value, (err, files) => {
      if (err) err;
      (async () => {
        let outPutString = "" + preHtmlTag;
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const rawFile = await fs.readFile(file, "utf-8");
          const htmlFile = rawFile.replace(/id='liststd'/g, "class='listd'");
          const content = getContent(htmlFile, i + 1);
          if (content.isSuccess()) {
            outPutString = outPutString + preTag + "\n" + content.value + "\n" + endTag + "\n";
          }
        }
        outPutString = outPutString + endHtmlTag;
        await makeHtmlFile(outPutString);
      })();
    });
  }
};
