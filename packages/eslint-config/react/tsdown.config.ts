import { defineConfig } from "tsdown";
import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import { myPlugins } from "./src/generated-rules-dts";
import { consola } from "consola";

export default defineConfig({
  entry: ["./src/index.ts"],
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  minify: true,
  // https://tsdown.dev/options/dependencies#deps-skipnodemodulesbundle
  deps: {
    skipNodeModulesBundle: true,
  },
  hooks: {
    "build:prepare": async () => {
      const dts = await pluginsToRulesDTS(myPlugins);
      await fs.writeFile("src/types.gen.d.ts", dts);
      consola.log("Generated src/types.gen.d.ts");
    },
  },
});
