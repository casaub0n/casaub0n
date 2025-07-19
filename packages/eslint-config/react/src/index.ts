/**
 * https://github.com/shadcn-ui/ui/blob/main/templates/monorepo-next/packages/eslint-config/react-internal.js
 * https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
 */

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
// @ts-expect-error -- no type config
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import type TSESLint from "@typescript-eslint/utils";

const config = tseslint.config([
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(pluginReact.configs.flat.recommended as any),
  pluginReact.configs.flat["jsx-runtime"],
  {
    languageOptions: {
      // @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]) satisfies TSESLint.TSESLint.FlatConfig.ConfigArray;

export default config;
