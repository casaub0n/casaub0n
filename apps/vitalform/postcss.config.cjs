const env = require("node:process");

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: {
    "@pandacss/dev/postcss": {},
    autoprefixer: {
      ...(env.NODE_ENV === "production" ? [purgecss] : []),
    },
  },
};
