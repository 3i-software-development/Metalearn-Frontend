/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ["admin.metalearn.vn"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
