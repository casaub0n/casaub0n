import { defineConfig } from "eslint/config";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import eslintPluginYml from "eslint-plugin-yml";

/**
 * only for pnpm-workspace.yaml
 */
export default defineConfig([
  ...eslintPluginYml.configs["flat/recommended"],
  {
    rules: {
      // 'yml/rule-name': 'error'
      "yml/sort-keys": [
        "warn",
        {
          pathPattern: "^$",
          order: ["root", "packages", "catalog"],
        },
        {
          pathPattern: "^catalog$",
          order: { type: "asc" },
        },
      ],
    },
  },

  {
    plugins: {
      json,
    },
  },

  // lint JSON files
  {
    files: ["**/*.json"],
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
<<<<<<< HEAD
      "json/sort-keys": "warn",
=======
>>>>>>> main
    },
  },

  // lint JSONC files
  {
    files: ["**/*.jsonc", ".vscode/*.json"],
    language: "json/jsonc",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },

  // lint JSON5 files
  {
    files: ["**/*.json5"],
    language: "json/json5",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },

  // markdown
  {
    plugins: {
      markdown,
    },
    extends: ["markdown/recommended"],
    rules: {
      "markdown/no-html": "error",
    },
  },
]);
