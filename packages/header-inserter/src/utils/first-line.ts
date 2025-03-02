import fs from "node:fs";

// https://github.com/pensierinmusica/firstline/blob/master/index.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is utils function
export const firstLine = (path: fs.PathLike, useOptions?: any) => {
  interface Options {
    encoding: BufferEncoding;
    lineEnding: string;
  }
  const options: Options = {
    encoding: "utf8",
    lineEnding: "\n",
  };
  Object.assign(options, useOptions);
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(path, { encoding: options.encoding });
    let accumulator = "";
    let pos = 0;
    let index;
    rs.on("data", (chunk) => {
      index = chunk.indexOf(options.lineEnding);

      accumulator += chunk;
      if (index === -1) {
        pos += chunk.length;
      } else {
        pos += index;
        rs.close();
      }
    })
      .on("close", () => {
        resolve(accumulator.slice(accumulator.codePointAt(0) === 0xfe_ff ? 1 : 0, pos));
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};
