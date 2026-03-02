import type { RuleOptions } from "./types.gen.ts";

/**
 * ESLint config rules by generated eslint-typegen
 *
 * Check [what's generated rules](../tsdown.config.ts)
 */
export const rules: RuleOptions = {
  // It is used ui package rule
  "@typescript-eslint/explicit-function-return-type": "off",
  /**
   * unused-config
   * [最低限の flat config（まずは no-unused-imports を動かす）](https://zenn.dev/seventhseven07/articles/06a02c4048decf)
   * [sweepline/eslint-plugin-unused-imports: Package to separate no-unused-vars and no-unused-imports for eslint as well as providing an autofixer for the latter.](https://github.com/sweepline/eslint-plugin-unused-imports/tree/master?tab=readme-ov-file#usage)
   */
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
    },
  ],
  "turbo/no-undeclared-env-vars": [
    "error",
    {
      allowList: ["^ENV_[A-Z]+$"],
    },
  ],
  // React scope no longer necessary with new JSX transform.
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  // for eslint v10
  "react/display-name": "off",
  "react/no-direct-mutation-state": "off",
  "react/no-render-return-value": "off",
  "react/no-string-refs": "off",
  "react/require-render-return": "off",
  /**
   * [eslint-plugin-unicorn/docs/rules/prevent-abbreviations.md at main · sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md#options)
   */
  "unicorn/prevent-abbreviations": [
    "error",
    {
      replacements: {
        props: {
          properties: false,
        },
        utils: {
          utilities: false,
        },
      },
    },
  ],
  /**
   * [eslint-plugin-unicorn/docs/rules/no-keyword-prefix.md at v60.0.0 · sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v60.0.0/docs/rules/no-keyword-prefix.md#disallowedprefixes)
   */
  "unicorn/no-keyword-prefix": ["error", { disallowedPrefixes: ["className"] }],
};
