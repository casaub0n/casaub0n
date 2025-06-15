import type TSESLint from "@typescript-eslint/utils";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const config = (): TSESLint.TSESLint.FlatConfig.ConfigArray => tseslint.config([]);
