/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@casaub0n/eslint-config/index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    loggerFn: false,
  },
};
