import fs from "node:fs/promises";
import { pluginsToRulesDTS } from "eslint-typegen/core";
import pluginReact from "eslint-plugin-react";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { importX } from "eslint-plugin-import-x";
import pluginTs from "@typescript-eslint/eslint-plugin";
import { consola } from "consola";
import type { ESLint } from "eslint";

export const myPlugins: Record<string, ESLint.Plugin> = {
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
};

// eslint-disable-next-line unicorn/prefer-top-level-await
void (async () => {
  const dts = await pluginsToRulesDTS(myPlugins);
  await fs.writeFile("./types.gen.d.ts", dts);
  consola.log("Generated src/types.gen.d.ts");
})();
