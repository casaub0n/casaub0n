import { defineConfig } from "tsdown";
import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import pluginReact from "eslint-plugin-react";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { importX } from "eslint-plugin-import-x";
import pluginTs from "@typescript-eslint/eslint-plugin";

export default defineConfig({
  entry: ["./src/index.ts"],
  shims: true,
  dts: true,
  clean: true,
  format: ["esm"],
  target: "esnext",
  platform: "node",
  minify: true,
  // https://tsdown.dev/options/dependencies#deps-skipnodemodulesbundle
  deps: {
    skipNodeModulesBundle: true,
  },
  hooks: {
    "build:prepare": async () => {
      const dts = await pluginsToRulesDTS({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "@typescript-eslint": pluginTs as any,
        "unused-imports": unusedImports,
        unicorn: eslintPluginUnicorn,
        turbo: turboPlugin,
        react: pluginReact,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "react-hooks": pluginReactHooks as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "import-x": importX as any,
      });
      await fs.writeFile("src/types.gen.d.ts", dts);
      // eslint-disable-next-line no-console
      console.log("Generated src/types.gen.d.ts");
    },
  },
});
