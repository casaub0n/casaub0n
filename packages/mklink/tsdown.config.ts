import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "browser",
  minify: true,
  skipNodeModulesBundle: true,
  // eslint-disable-next-line unicorn/better-regex
  noExternal: [/(?:.*)/],
  copy: ["./src/static/**/*.{json,html,js}"],
});
