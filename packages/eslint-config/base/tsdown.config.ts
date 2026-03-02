import { defineConfig } from "tsdown";
import fs from "node:fs/promises";

export default defineConfig({
  entry: ["./src/index.ts"],
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  minify: true,
  skipNodeModulesBundle: true,
  hooks: {
    "build:prepare": async () => {
      const eslintConfigPreset = await import("./src/gen.ts").then((m) => m.basePreset);
      const { flatConfigsToRulesDTS } = await import("eslint-typegen/core");
      const dts = await flatConfigsToRulesDTS(eslintConfigPreset(), {
        includeAugmentation: false,
      });
      await fs.writeFile("src/types.gen.d.ts", dts);
      // eslint-disable-next-line no-console
      console.log("Generated src/types.gen.d.ts");
    },
  },
});
