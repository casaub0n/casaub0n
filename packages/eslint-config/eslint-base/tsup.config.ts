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
  target: "esnext",
  platform: "node",
  minify: true,
  // bundle: true,
  // https://github.com/egoist/tsup/issues/619
  // noExternal: [/(?:.*)/],
  splitting: false,
  // banner: {
  //   js: 'import { createRequire } from "module";const require = createRequire(import.meta.url);',
  // },
});
