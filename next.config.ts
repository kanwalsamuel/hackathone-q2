 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's strict mode for highlighting potential issues
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during builds
  },
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    disableStaticImages: true, // Disables static image imports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity images (HTTPS only)
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com', // Google Maps API images (if needed)
        pathname: '/**',
      },
    ],
  },

};

module.exports = nextConfig;
