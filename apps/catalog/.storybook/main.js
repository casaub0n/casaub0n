const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    {
      directory: "../../vitalform/src/",
      titlePrefix: "vitalform",
    },
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs",
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../vitalform/tsconfig.json"),
      }),
    );
    return config;
  },
};

export default config;
