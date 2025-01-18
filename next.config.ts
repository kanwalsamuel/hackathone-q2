import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;



// next.config.js
module.exports = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity CDN to the list of allowed domains
  },
};
