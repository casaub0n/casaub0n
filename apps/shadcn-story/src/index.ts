import path from "node:path";

function getAbsolutePath(value: string): string {
  return path.dirname(import.meta.resolve(path.join(value, "package.json")));
}

const config = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
