import base from "../eslint-config/eslint-base/dist/index.mjs";

const baseEslint = [
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  ...base,
];

export default baseEslint;
