import type { RuleOptions } from "./types.gen.ts";

/**
 * ESLint config rules by generated eslint-typegen
 *
 * Check [what's generated rules](../tsdown.config.ts)
 */
export const rules = {
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
} as const satisfies RuleOptions;
