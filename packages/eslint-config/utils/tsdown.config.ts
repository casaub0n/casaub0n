import { defineConfig } from "tsdown";
import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import { consola } from "consola";

export default defineConfig({
  entry: {
    "ignore-config": "./src/ignore-config.ts",
    "eslint-core-rules": "./src/eslint-core-rules.ts",
    "typescript-rules": "./src/typescript-rules.ts",
    index: "./src/index.ts",
  },
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
      const myPlugins = await import("./src/my-plugins.ts").then((m) => m.myPlugins);
      const dts = await pluginsToRulesDTS(myPlugins);
      await fs.writeFile("src/types.gen.d.ts", dts);
      consola.log("Generated src/types.gen.d.ts");
    },
  },
});
