import { defineConfig } from "tsdown";

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
});
