import fs from "node:fs";
import { firstLine } from "./utils/first-line";
import consola from "consola";

export const insertHeader = (file: string, comment: string): void => {
  const firstLineText = firstLine(file);
  void firstLineText.then(() => {
    const data = fs.readFileSync(file);
    const fd = fs.openSync(file, "w+");
    const insert = Buffer.from(`${comment}\n`);
    fs.writeSync(fd, insert, 0, insert.length, 0);
    fs.writeSync(fd, data, 0, data.length, insert.length);
    fs.close(fd, (error) => {
      if (error) throw error;
      consola.info(`success to insert header：${file}`);
    });
  });
};
