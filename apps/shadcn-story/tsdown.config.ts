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
  // https://tsdown.dev/options/dependencies#deps-onlyallowbundle
  // https://tsdown.dev/options/dependencies#deps-skipnodemodulesbundle
  deps: {
    skipNodeModulesBundle: true,
    onlyAllowBundle: false,
  },
  // https://tsdown.dev/options/css#css-support
  css: {
    target: false,
  },
});
