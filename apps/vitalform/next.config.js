/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dycpos4uc/image/upload",
  },
  output: "export",
};

module.exports = nextConfig;
