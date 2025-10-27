const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/dycpos4uc/image/upload/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
