import { defineConfig } from "tsdown";

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
  skipNodeModulesBundle: true,
});
