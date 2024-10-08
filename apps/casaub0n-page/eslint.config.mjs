// import next from "../../packages/config-eslint/next.mjs";
import next from "../../packages/config-eslint/dist/index.mjs";

const baseEslint = [
  {
    ignores: ["**/.next/", "**/__reports__/", "coverage"],
  },
  ...next,
];

export default baseEslint;
