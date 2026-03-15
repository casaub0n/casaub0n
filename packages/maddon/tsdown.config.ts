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
  deps: {
    alwaysBundle: [/(?:.*)/],
  },
  copy: ["./src/static/**/*.{json,html,js}"],
});
