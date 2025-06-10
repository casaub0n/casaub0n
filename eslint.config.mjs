import { defineConfig } from "eslint/config";
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
]);
