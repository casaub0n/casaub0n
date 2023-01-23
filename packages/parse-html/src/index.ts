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

const getContent = (htmlText: string): Result<string, DoSomethingError> => {
  const dom = new JSDOM(htmlText, {
    runScripts: "dangerously",
    resources: "usable",
  });
  const tableElement = dom.window.document.getElementById("scrTable");
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
          const htmlFile = await fs.readFile(file, "utf-8");
          const content = getContent(htmlFile);
          if (content.isSuccess()) {
            console.log(`${preTag}`);
            console.log(`${content.value}`);
            console.log(`${endTag}`);

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
