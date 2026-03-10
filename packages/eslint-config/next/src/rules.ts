import type { RuleOptions } from "./types.gen.ts";

/**
 * ESLint config rules by generated eslint-typegen
 *
 * Check [what's generated rules](../tsdown.config.ts)
 */
export const rules = {
  "@typescript-eslint/explicit-function-return-type": "off",

  /**
   * [最低限の flat config（まずは no-unused-imports を動かす）](https://zenn.dev/seventhseven07/articles/06a02c4048decf)
   */
  "unused-imports/no-unused-imports": "error",
  "turbo/no-undeclared-env-vars": [
    "error",
    {
      allowList: ["^ENV_[A-Z]+$"],
    },
  ],
} as const satisfies RuleOptions;
