import { insertHeader } from "./insert-header";
import { makeHeader } from "./makeHeader/index";

const init = (): void => {
  const header = makeHeader();
  if (header.isOk()) {
    console.log(`config json: \n${header.value}`);
    const files = process.argv.slice(2);
    files.forEach((f) => {
      insertHeader(f, header.value);
    });
  }
};

init();
