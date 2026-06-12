import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Keeps build output inside the project root on CI and monorepo setups
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
