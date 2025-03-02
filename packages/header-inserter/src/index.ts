import { insertHeader } from "./insert-header";
import { makeHeader } from "./makeHeader";
import { logger } from "./utils/logger";

const init = (): void => {
  const header = makeHeader();
  logger.info(`config json: \n${header}`);
  const files = process.argv.slice(2);
  for (const f of files) {
    insertHeader(f, header);
  }
};

init();
