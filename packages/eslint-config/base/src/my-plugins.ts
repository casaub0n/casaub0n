import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import { importX } from "eslint-plugin-import-x";
import pluginTs from "@typescript-eslint/eslint-plugin";
import type { ESLint } from "eslint";
import js from "@eslint/js";

export const myPlugins: Record<string, ESLint.Plugin> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "@typescript-eslint": pluginTs as any,
  "unused-imports": unusedImports,
  unicorn: eslintPluginUnicorn,
  turbo: turboPlugin,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "import-x": importX as any,
  js,
};
