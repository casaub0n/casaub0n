import { insertHeader } from "./insert-header.ts";
import { makeHeader } from "./makeHeader/index.ts";

const init = (): void => {
  const header = makeHeader();
  if (header.isSuccess()) {
    console.log(`config json: \n${header.value}`);
    const files = process.argv.slice(2);
    files.map((f) => {
      insertHeader(f, header.value);
    });
  }
};

init();
