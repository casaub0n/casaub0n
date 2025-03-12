// import path from "node:path";
// import { fileURLToPath } from "node:url";
import base from "./dist/index.mjs";

// const { dirname } = path;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default [
  // {
  //   ignores: ["dist/**"],
  // },
  ...base,
  {
    //   languageOptions: {
    //     parserOptions: {
    //       projectService: {
    //         allowDefaultProject: ["./eslint.config.mjs", "./dist/index.mjs", "*.mjs"],
    //         defaultProject: true,
    //       },
    //       project: true,
    //       // projectService: true,
    //       tsconfigRootDir: __dirname,
    //       // projectFolderIgnoreList: ["**dist**"],
    //     },
    //   },
    rules: {
      "no-console": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "unicorn/no-null": "off",
    },
  },
];
