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

console.log("Build completed!");
