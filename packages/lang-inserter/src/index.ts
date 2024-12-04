import { insertHeader } from "./insert-header";
import { makeHeader } from "./makeHeader";
import { logger } from "./utils/logger";

// https://zenn.dev/y__adler/articles/d21298ea6e0372
const init = (): void => {
  const header = makeHeader();
  logger.info(`config json: \n${header}`);
  const files = process.argv.slice(2);
  files.forEach((f) => {
    insertHeader(f, header);
  });
};

init();
