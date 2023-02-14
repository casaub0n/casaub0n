import { analyzeCsv } from "./analyzeCsv";
import { makeCsv } from "./makeCsv";

const init = () => {
  makeCsv();
  analyzeCsv();
};

init();
