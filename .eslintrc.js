// @ts-check

/**
 * @type {import('eslint').Rule.RuleModule}
 */
const eslintConfig = {
  // @ts-ignore
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

module.exports = eslintConfig;
