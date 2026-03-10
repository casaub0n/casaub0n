import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import { myPlugins } from "./my-plugins";
import { consola } from "consola";

// eslint-disable-next-line unicorn/prefer-top-level-await
void (async () => {
  const dts = await pluginsToRulesDTS(myPlugins);
  await fs.writeFile("./types.gen.d.ts", dts);
  consola.log("Generated src/types.gen.d.ts");
})();
