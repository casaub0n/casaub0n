module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "turbo",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  rules: {
    "no-unused-vars": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
