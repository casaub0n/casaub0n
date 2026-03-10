import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { importX } from "eslint-plugin-import-x";
import pluginTs from "@typescript-eslint/eslint-plugin";
import type { ESLint } from "eslint";
import nextPlugin from "@next/eslint-plugin-next";

export const myPlugins: Record<string, ESLint.Plugin> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "@typescript-eslint": pluginTs as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "react-hooks": pluginReactHooks as any,
  /**
   * SyntaxError: Named export 'flatConfig' not found. The requested module '@next/eslint-plugin-next' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:
   * "@next/next": flatConfig.recommended.plugins["@next/next"], This package is CommonJS style
   * A configuration object specifies rule "@next/next/google-font-display", but could not find plugin "@next/next".
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "@next/next": nextPlugin as any,
  "unused-imports": unusedImports,
  unicorn: eslintPluginUnicorn,
  turbo: turboPlugin,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "import-x": importX as any,
};
