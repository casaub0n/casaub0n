import fs from "node:fs/promises";
import path from "node:path";
import { JSDOM } from "jsdom";
import { err, ok, type Result } from "neverthrow";
import { DoSomethingError } from "./utils/something-error";

const readData = (filePath: string): Result<string, DoSomethingError> => {
  const htmlStr = path.join(process.cwd(), filePath);
  return htmlStr ? ok(`${htmlStr}/*`) : err(new DoSomethingError());
};

/**
 * the numbers array of filtered column
 */
const filterNum = [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22];

/**
 * filter useful value and then, make a table html string
 * @param tableElement - get table element like this: // dom.window.document.getElementById("somethingId")
 * @param month - In this project, just use file suffix
 */
const filterTable = (tableElement: HTMLElement, month: number): string => {
  //  TODO: use evp-ts
  let str = "";
  const envTableHead = process.env.TABLE_HEAD;
  envTableHead
    ? (str = `<h2>${month.toString()}${envTableHead}</h2>\n<table id='scrTable' border="1" style="border-collapse:collapse; font-size:0.025em">\n`)
    : (str = `<h2>${month.toString()}</h2>\n<table id='scrTable' border="1" style="border-collapse:collapse; font-size:0.025em">\n`);
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
 */
const getContent = (htmlText: string, month: number): Result<string, DoSomethingError> => {
  const dom = new JSDOM(htmlText, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const tableElement = dom.window.document.getElementById("scrTable");
  return tableElement ? ok(filterTable(tableElement, month)) : err(new DoSomethingError());
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

export const filterHtml = (): void => {
  const monthHtml = readData("./src/input_data");
  if (monthHtml.isOk()) {
    void (async () => {
      let outPutString = "";
      outPutString += preHtmlTag;
      for (let i = 1; i < 13; i++) {
        const file = `src\\input_data\\${i.toString()}.html`;
        const rawFile = await fs.readFile(file, "utf-8");
        const htmlFile = rawFile.replace(/id='liststd'/g, "class='listd'");
        const month = path.basename(file, ".html");

        const content = getContent(htmlFile, Number(month));
        if (content.isOk()) {
          outPutString = `${outPutString + preTag}\n${content.value}\n${endTag}\n`;
        }
      }
      outPutString = outPutString + endHtmlTag;
      await makeHtmlFile(outPutString);
    })();
  }
};
