import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

import config from "./index.js";

export default [
  eslint.configs.recommended,
  ...tseslint
    .config(
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
      importPlugin.flatConfigs.recommended,
      {
        languageOptions: {
          parserOptions: {
            warnOnUnsupportedTypeScriptVersion: false,
            projectService: true,
          },
        },
        settings: {
          "import/parsers": {
            "@typescript-eslint/parser": [
              ".cjs",
              ".cts",
              ".ctsx",
              ".js",
              ".jsx",
              ".mjs",
              ".mts",
              ".mtsx",
              ".ts",
              ".tsx",
            ],
          },
        },
      },
      {
        rules: config.overrides[0].rules,
      },
    )
    .map((config) => ({
      ...config,
      files: ["**/*.{cts,ctsx,mts,mtsx,ts,tsx}"],
    })),
  {
    files: ["**/*.d.ts", "**/*.d.*.ts"],
    rules: {
      "import/no-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
