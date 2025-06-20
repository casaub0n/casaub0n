import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: ".storybook",
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  minify: true,
  skipNodeModulesBundle: true,
});
