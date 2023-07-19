module.exports = {
  plugins: {
    "@pandacss/dev/postcss": {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],
    },
  },
};
