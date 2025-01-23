// // // import type { NextConfig } from "next";

// // // const nextConfig: NextConfig = {
// // //   /* config options here */
// // // };

// // // export default nextConfig;



// // // // next.config.js
// // // module.exports = {
// // //   images: {
// // //     domains: ['cdn.sanity.io','maps.googleapis.com'], // Add Sanity CDN to the list of allowed domains
// // //   },
// // // };




// // // next.config.js
// // module.exports = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: 'https',
// //         hostname: 'cdn.sanity.io',
// //         port: '',
// //         pathname: '/**',
// //       },
// //       {
// //         protocol: 'https',
// //         hostname: 'maps.googleapis.com',
// //         port: '',
// //         pathname: '/**',
// //       },
// //     ],
// //   },
// // };

// // next.config.js
// module.exports = {
//   eslint: {
//     // Disables ESLint during production builds
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'maps.googleapis.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
// //   },
// // };



// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true, // Ignores ESLint during production builds
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'cdn.sanity.io',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'maps.googleapis.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   // typescript: {
//   //   ignoreBuildErrors: true, // Ignores TypeScript errors during the build
//   // },
// };


module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during production builds
  },
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
     remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
    typescript: {
      ignoreBuildErrors: true, // Ignores TypeScript errors during the build
    },

    experimental:{
      missingSuspenseWithCSRBailout:false,
    }
};
