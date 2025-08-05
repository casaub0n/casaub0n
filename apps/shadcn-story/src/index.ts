import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
// eslint-disable-next-line import-x/no-unresolved
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {},

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async viteFinal(config: any) {
    return Object.assign(config, {
      resolve: {
        alias: {
          // eslint-disable-next-line unicorn/prefer-module
          "@": path.resolve(__dirname, "../../../packages/ui/src"),
        },
      },
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()], // PostCSS 設定を適用
        },
      },
    });
  },
};

export default config;
