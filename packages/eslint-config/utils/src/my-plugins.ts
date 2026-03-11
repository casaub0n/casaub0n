import pluginTs from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import type { ESLint } from "eslint";

export const myPlugins: Record<string, ESLint.Plugin> = {
  "@typescript-eslint": pluginTs as any,
  js,
};
