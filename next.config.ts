import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/JULIU-S" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/JULIU-S/" : undefined,
  typescript: {
    ignoreBuildErrors: process.env.GITHUB_ACTIONS === "true",
  },
};

export default nextConfig;
