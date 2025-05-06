import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

type EslintCoreRules = FlatConfig.Config["rules"];

export const eslintCoreRules: EslintCoreRules = {
  /**
   * [eslint-config/base/index.js at master · herp-inc/eslint-config](https://github.com/herp-inc/eslint-config/blob/master/base/index.js)
   */
  // ESlint core
  curly: "error",
  "default-case-last": "error",
  eqeqeq: "error",
  "no-console": "error",
  "no-else-return": ["error", { allowElseIf: false }],
  "no-lonely-if": "error",
  "no-multi-assign": "error",
  "no-negated-condition": "error",
  "no-new": "error",
  "no-new-object": "error",
  "no-new-wrappers": "error",
  "no-param-reassign": "error",
  "no-return-assign": "error",
  "no-self-compare": "error",
  "no-sequences": ["error", { allowInParentheses: false }],
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": "error",
  "no-useless-backreference": "error",
  "no-useless-concat": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "object-shorthand": "error",
  "one-var": ["error", "never"],
  "prefer-object-spread": "error",
  "sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
};
