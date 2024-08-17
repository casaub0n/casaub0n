import { build } from "esbuild";

const outDir = "dist";

void (async () => {
  await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    target: "node20",
    outfile: `${outDir}/index.js`,
  });
})();

console.log("Build completed!");
