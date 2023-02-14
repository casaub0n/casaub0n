import path from "path";
import glob from "glob";
import { DoSomethingError, Failure, Result, Success } from "./utils/Result";
// import * as dfd from "danfojs-node";
import { parse } from "csv-parse";
import fs from "fs";
// import type { Readable } from "stream";

const readData = (filePath: string): Result<string, DoSomethingError> => {
  const htmlStr = path.join(process.cwd(), filePath);
  if (htmlStr) return new Success(htmlStr + "/*");
  return new Failure(new DoSomethingError());
};

/**
 * csv parser
 */
const parser = parse({ delimiter: "," }, (err, data) => {
  if (err) new Error(`error message: ${err.message}`);
  console.log(data);
});

const rs = (file: string) => {
  return fs.createReadStream(file, { encoding: "utf-8", highWaterMark: 8 });
};

export const analyzeCsv = () => {
  const csvFile = readData("./src/input_csv");
  if (csvFile.isSuccess()) {
    const csvPath = csvFile.value;
    console.log(`csv file path: ${csvPath}`);
    glob(csvPath, (err, files) => {
      (async () => {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const inputData = fs.readFileSync(file, { encoding: "utf8" });
          const parsedData = parse(inputData, { columns: true });
          parsedData.on("close", (data) => {
            console.log(data);
          });
          // for await (const file of files) {
          // const file = files[i];

          // dfd
          //   .readCSV(file)
          //   .then((df) => {
          //     // const hoge: string[] = ["hoge", "fuga"];
          //     df.asType(' "保険料"', "string");
          //     df.loc({ columns: [' "保険料"'] }).print();
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });

          // const d3 = await import("d3");
          // d3.csv(file)
          //   .then((hoge) => {
          //     console.log(hoge);
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });
        }
      })();
    });
  }
};
