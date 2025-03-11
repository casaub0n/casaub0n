import { build } from "esbuild";

const outDirectory = "dist";

// eslint-disable-next-line unicorn/prefer-top-level-await
void (async () => {
  await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    target: "node20",
    outfile: `${outDirectory}/index.js`,
  });
})();

// eslint-disable-next-line no-console -- build script
console.log("Build completed!");
