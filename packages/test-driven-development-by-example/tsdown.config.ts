import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
    test: "./src/money.test.ts",
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
});
