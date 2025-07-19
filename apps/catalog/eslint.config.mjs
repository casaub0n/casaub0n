// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import base from "../../packages/eslint-config/eslint-base/dist/index.mjs";

export default [
  ...base({
    tsConfigurationRootDirectory: import.meta.dirname,
    tsconfigFileName: "./tsconfig.json",
  }),
  ...storybook.configs["flat/recommended"],
];
