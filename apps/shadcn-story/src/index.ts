// eslint-disable-next-line unicorn/import-style
import { dirname, join } from "node:path";

export function getAbsolutePath(value: string): string {
  return dirname(import.meta.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async viteFinal(config: any) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: import.meta.resolve(import.meta.dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },

  docs: {
    // eslint-disable-next-line @cspell/spellchecker
    autodocs: true,
  },
};

export default config;
