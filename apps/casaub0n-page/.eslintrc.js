/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@casaub0n/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
