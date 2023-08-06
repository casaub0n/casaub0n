import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "../casaub0n-page/src/components/**/*.{js,jsx,ts,tsx,stories.tsx}",
    "../casaub0n-page/src/app/**/*.{js,jsx,ts,tsx,stories.tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
