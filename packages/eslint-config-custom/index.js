const eslintConfig = {
  // https://github.com/storybookjs/eslint-plugin-storybook
  extends: ["next/core-web-vitals", "turbo", "prettier", "plugin:storybook/recommended"],
  plugins: ["@typescript-eslint", "import", "unused-imports", "perfectionist"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
    "perfectionist/sort-jsx-props": [
      "warn",
      {
        type: "natural",
        order: "asc",
        "always-on-top": ["id", "name"],
        shorthand: "last",
        multiline: "first",
        callback: "ignore",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/utils/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
  reportUnusedDisableDirectives: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
    // https://github.com/typescript-eslint/typescript-eslint/issues/393#issuecomment-511115374
    warnOnUnsupportedTypeScriptVersion: false,
  },
};

module.exports = eslintConfig;
