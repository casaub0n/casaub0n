import base from "../config-eslint/base.mjs";

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
