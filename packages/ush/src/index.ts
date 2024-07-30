import { insertHeader } from "./insert-header";
import { makeHeader } from "./makeHeader";

const init = (): void => {
  const header = makeHeader();
  console.log(`config json: \n${header}`);
  const files = process.argv.slice(2);
  files.forEach((f) => {
    insertHeader(f, header);
  });
};

init();
