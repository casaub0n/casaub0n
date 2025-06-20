import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    main: "./src/index.ts",
    preview: "./src/preview.ts",
  },
  outDir: ".storybook",
  shims: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  minify: true,
  skipNodeModulesBundle: true,
});
