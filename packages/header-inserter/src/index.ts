import consola from "consola";
import { insertHeader } from "./insert-header";
import { makeHeader } from "./makeHeader";

const init = (): void => {
  const header = makeHeader();
  consola.info(`config json: \n${header}`);
  const files = process.argv.slice(2);
  for (const f of files) {
    insertHeader(f, header);
  }
};

init();
