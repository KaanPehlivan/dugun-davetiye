import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/dugun-davetiye") when hosting under a sub-path such as GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static invitation: `npm run build` emits ./out for any static host.
  output: "export",
  basePath,
};

export default nextConfig;
