import { defineConfig } from "tsup";

/**
 * bundle all dependency
 * @see https://github.com/egoist/tsup/issues/619#issuecomment-2248676853
 */
export default defineConfig({
  format: ["esm"],
  entry: {
    "ignore-config": "./src/ignore-config.ts",
    "eslint-core-rules": "./src/eslint-core-rules.ts",
    "typescript-rules": "./src/typescript-rules.ts",
  },
  dts: true,
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
