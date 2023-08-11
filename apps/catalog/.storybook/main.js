// @ts-check

import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

// https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    {
      directory: "../../casaub0n-page/src/",
      titlePrefix: "casaub0n-page",
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
  staticDirs: ["../../casaub0n-page/public"],
  framework: "@storybook/nextjs",
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  // ignore type because this is dynamic config
  webpackFinal: async (config) => {
    // @ts-ignore
    config.resolve.plugins = config.resolve.plugins || [];
    // @ts-ignore
    config.resolve.plugins.push(
      // @ts-ignore
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../casaub0n-page/tsconfig.json"),
      }),
    );
    return config;
  },
};

export default config;
