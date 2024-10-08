import next from "../../packages/config-eslint/next.mjs";

const baseEslint = [
  {
    ignores: ["**/.next/", "**/__reports__/", "coverage"],
  },
  ...next,
];

export default baseEslint;
