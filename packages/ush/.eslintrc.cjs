/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@casaub0n/eslint-config/node.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    /* console.log is necessary */
    "no-console": "off",
  },
};
