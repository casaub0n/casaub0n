import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import { myPlugins } from "./my-plugins";
import { consola } from "consola";

void (async () => {
  const dts = await pluginsToRulesDTS(myPlugins);
  await fs.writeFile("./src/types.gen.d.ts", dts);
  consola.log("Generated src/types.gen.d.ts");
})();
