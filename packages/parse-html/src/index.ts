import { JSDOM } from "jsdom";
import path from "path";
import fs from "fs/promises";
import glob from "glob";
import { DoSomethingError, Failure, Result, Success } from "./utils/Result";
import * as dfd from "danfojs-node";

const readData = (filePath: string): Result<string, DoSomethingError> => {
  const htmlStr = path.join(process.cwd(), filePath);
  if (htmlStr) return new Success(htmlStr + "/*");
  return new Failure(new DoSomethingError());
};

export const tableDf = (tableElement: HTMLElement) => {
  const trArray = tableElement?.getElementsByTagName("tr");
  let data: string[][] = [];
  let cols: string[] = [];
  if (trArray) {
    for (const tr of trArray) {
      const tdArray = tr.getElementsByTagName("td");
      let dataTd: string[] = [];
      for (const td of tdArray) {
        if (td.classList.contains("midashi2")) {
          const tdValue = td.textContent;
          if (tdValue) {
            cols.push(tdValue);
          }
        } else {
          const tdValue = td.textContent;
          if (tdValue) {
            dataTd.push(tdValue);
          } else {
            dataTd.push("");
          }
        }
      }
      data.push(dataTd);
    }
    const tf = dfd.tensorflow;
    const tensor_arr = tf.tensor2d(data);
    const df = new dfd.DataFrame(tensor_arr, { columns: cols });
    df.print();
  }
};

export const convertCSVfromTable = (tableElement: HTMLElement, month: number) => {
  const trArray = tableElement?.getElementsByTagName("tr");
  let csvString = "";
  if (trArray) {
    for (let i = 0; i < trArray.length; i++) {
      const tr = trArray[i];
      const tdArray = tr.getElementsByTagName("td");
      for (let j = 0; j < tdArray.length; j++) {
        const td = tdArray[j];
        if (j === tdArray.length - 1) {
          csvString = csvString + `"${td.textContent}"`;
        } else {
          csvString = csvString + `"${td.textContent}", `;
        }
      }
      csvString = csvString + "\n";
    }
  }
  console.log(`csv: \n${csvString}`);
  const filePath = path.join(process.cwd(), `./dist/${month}out.csv`);
  (async () => {
    await fs.writeFile(filePath, csvString, "utf-8");
  })();
};

const getContent = (htmlText: string, month: number): Result<string, DoSomethingError> => {
  const dom = new JSDOM(htmlText, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const tableElement = dom.window.document.getElementById("scrTable");
  if (tableElement) convertCSVfromTable(tableElement, month);
  tableElement?.removeAttribute("scrTable");
  if (tableElement) return new Success(tableElement.outerHTML);
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

const init = () => {
  const month_html = readData("./src/input_data");
  if (month_html.isSuccess()) {
    console.log(`month_html: ${month_html.value}`);
    glob(month_html.value, (err, files) => {
      (async () => {
        await makeHtmlFile();
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const rawFile = await fs.readFile(file, "utf-8");
          const htmlFile = rawFile.replace(/id='liststd'/g, "class='listd'");
          const content = getContent(htmlFile, i);
          if (content.isSuccess()) {
            await appendHtmlFile(preTag);
            await appendHtmlFile(content.value);
            await appendHtmlFile(endTag);
          }
        }
        await appendHtmlFile(endHtmlTag);
      })();
    });
  }
};

init();
