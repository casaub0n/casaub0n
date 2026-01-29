import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  skipNodeModulesBundle: true,
  // eslint-disable-next-line unicorn/better-regex
  noExternal: [/(?:.*)/],
  inlineOnly: false,
});
