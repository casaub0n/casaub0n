import { defineConfig } from "tsup";

/**
 * bundle all dependency
 * @see https://github.com/egoist/tsup/issues/619#issuecomment-2248676853
 */
export default defineConfig({
  format: ["esm"],
  entry: ["./src/index.ts"],
  dts: false,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  target: "node20",
  platform: "node",
  minify: true,
  bundle: true,
  // https://github.com/egoist/tsup/issues/619
  // eslint-disable-next-line unicorn/better-regex -- @todo check [/(?:.*)/] is [/.*/]
  noExternal: [/(?:.*)/],
  splitting: false,
});
