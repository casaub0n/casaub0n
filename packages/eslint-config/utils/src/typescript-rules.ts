import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

/**
 * `@typescript-eslint`
 */
export const typescriptRules = {
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
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "accessor",
      format: ["camelCase"],
    },
    {
      selector: "enumMember",
      format: ["PascalCase"],
    },
    {
      selector: "function",
      format: ["camelCase", "PascalCase"],
    },
    {
      selector: "method",
      format: ["camelCase", "PascalCase"],
      filter: {
        regex: "^__resolveType$",
        match: false,
      },
    },
    {
      selector: "objectLiteralMethod",
      // eslint-disable-next-line unicorn/no-null
      format: null,
    },
    {
      selector: "objectLiteralProperty",
      // eslint-disable-next-line unicorn/no-null
      format: null,
    },
    {
      selector: "parameter",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "parameter",
      modifiers: ["destructured"],
      // eslint-disable-next-line unicorn/no-null
      format: null,
    },
    {
      selector: "parameterProperty",
      format: ["camelCase"],
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "variable",
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
      filter: {
        regex: "^_$",
        match: false,
      },
    },
    {
      selector: "variable",
      modifiers: ["destructured"],
      // eslint-disable-next-line unicorn/no-null
      format: null,
    },
  ],
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
} satisfies FlatConfig.Config["rules"];
