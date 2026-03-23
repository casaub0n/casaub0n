import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      platform: "node",
      input: {
        main: "./src/index.ts",
        preview: "./src/preview.ts",
      },
      output: {
        dir: ".storybook",
        format: "esm",
        esModule: true,
        cleanDir: true,
      },
    },
  },
});
