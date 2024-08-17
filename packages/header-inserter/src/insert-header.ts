import fs from "node:fs";
import { firstLine } from "./utils/first-line";
import { logger } from "./utils/logger";

export const insertHeader = (file: string, comment: string): void => {
  const firstLineText = firstLine(file);
  void firstLineText.then(() => {
    const data = fs.readFileSync(file);
    const fd = fs.openSync(file, "w+");
    const insert = Buffer.from(`${comment}\n`);
    fs.writeSync(fd, insert, 0, insert.length, 0);
    fs.writeSync(fd, data, 0, data.length, insert.length);
    fs.close(fd, (err) => {
      if (err) throw err;
      logger.info(`success to insert header：${file}`);
    });
  });
};
