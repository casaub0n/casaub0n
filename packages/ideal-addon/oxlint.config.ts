import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
  },
  globals: {
    dataLayer: "readonly",
  },
  plugins: ["unicorn"],
  rules: {
    // eslint core rules
    // packages/eslint-config/utils/src/eslint-core-rules.ts
    // curly: "error",
    "default-case-last": "error",
    eqeqeq: "error",
    // "no-console": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    // "no-new-object": "error",
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

    // TypeScript rules
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-array-delete": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    // "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "@typescript-eslint/no-invalid-void-type": ["error", { allowAsThisParameter: true }],
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": ["error", { allowConstantLoopConditions: true }],
    "@typescript-eslint/no-unused-expressions": ["error", { enforceForJSX: true }],
    "@typescript-eslint/no-unused-vars": "off", // Let TypeScript check it
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

    // Unicorn
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [".astro$"],
      },
    ],
  },
  options: {
    typeAware: true,
  },
});
