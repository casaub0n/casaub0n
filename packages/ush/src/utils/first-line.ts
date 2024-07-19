import fs from "node:fs";

// https://github.com/pensierinmusica/firstline/blob/master/index.js
export const firstLine = (path: fs.PathLike, useOpts?: any) => {
  interface Opts {
    encoding: BufferEncoding;
    lineEnding: string;
  }
  const opts: Opts = {
    encoding: "utf-8",
    lineEnding: "\n",
  };
  Object.assign(opts, useOpts);
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(path, { encoding: opts.encoding });
    let acc = "";
    let pos = 0;
    let index;
    rs.on("data", (chunk) => {
      index = chunk.indexOf(opts.lineEnding);
      acc += chunk;
      if (index === -1) {
        pos += chunk.length;
      } else {
        pos += index;
        rs.close();
      }
    })
      .on("close", () => {
        resolve(acc.slice(acc.charCodeAt(0) === 0xfeff ? 1 : 0, pos));
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};
