import { JSDOM } from "jsdom";
import path from "path";
import fs from "fs/promises";
import glob from "glob";
import { DoSomethingError, Failure, Result, Success } from "./utils/Result";

const readData = (filePath: string): Result<string, DoSomethingError> => {
  const htmlStr = path.join(process.cwd(), filePath);
  if (htmlStr) return new Success(htmlStr + "/*");
  return new Failure(new DoSomethingError());
};

/**
 * the numbers array of filtered column
 */
const filterNum = [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22];

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

const makeHtmlFile = async (): Promise<void> => {
  const filePath = path.join(process.cwd(), "./dist/hello.html");
  await fs.writeFile(filePath, preHtmlTag, "utf-8");
};

const appendHtmlFile = async (str: string): Promise<void> => {
  const filePath = path.join(process.cwd(), "./dist/hello.html");
  await fs.appendFile(filePath, str, "utf-8");
};

export const filterHtml = () => {
  const month_html = readData("./src/input_data");
  if (month_html.isSuccess()) {
    // console.log(`month_html: ${month_html.value}`);
    glob(month_html.value, (err, files) => {
      if (err) err;
      (async () => {
        await makeHtmlFile();
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const rawFile = await fs.readFile(file, "utf-8");
          const htmlFile = rawFile.replace(/id='liststd'/g, "class='listd'");
          const content = getContent(htmlFile, i+1);
          if (content.isSuccess()) {
            await appendHtmlFile(preTag);
            // console.log(content.value);
            await appendHtmlFile(content.value);
            await appendHtmlFile(endTag);
          }
        }
        await appendHtmlFile(endHtmlTag);
      })();
    });
  }
};
