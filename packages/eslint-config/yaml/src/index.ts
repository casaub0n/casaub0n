import eslintPluginYml from "eslint-plugin-yml";
import type TSESLint from "@typescript-eslint/utils";

const config = (): TSESLint.TSESLint.FlatConfig.ConfigArray => [
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
];

export default config;
