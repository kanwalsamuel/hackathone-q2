// // import type { Config } from "tailwindcss";

// // export default {
// //   content: [
// //     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the pages directory
// //     "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the components directory
// //     "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the app directory
// //   ],
// //   theme: {
// //     extend: {
// //       spacing: {
// //         26: "6.5rem", // Adds custom spacing (e.g., `ml-26` or `pl-26`)
// //         72: "18rem", // Additional spacing for large layout needs
// //         84: "21rem",
// //         96: "24rem",
// //       },
// //       colors: {
// //         background: "var(--background)", // Extends color palette with CSS variable
// //         foreground: "var(--foreground)", // Extends color palette with CSS variable
// //         primary: "#4e4d93", // Example custom color for consistency
// //         secondary: "#F9F9F9", // Example secondary color
// //         accent: "#FF6F61", // Additional color for call-to-action elements
// //       },
// //       fontFamily: {
// //         clash: ["Clash Display", "sans-serif"], // Custom font family
// //         satoshi: ["Satoshi", "sans-serif"], // Additional custom font family
// //       },
// //       boxShadow: {
// //         custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow for buttons or cards
// //         deep: "0 8px 12px rgba(0, 0, 0, 0.2)", // Deeper shadow for elevated elements
// //       },
// //       borderRadius: {
// //         "4xl": "2rem", // Adds an extra large border radius for rounded components
// //       },
// //     },
// //   },
// //   plugins: [],
// // } satisfies Config;



// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       spacing: {
//         26: "6.5rem",
//         72: "18rem",
//         84: "21rem",
//         96: "24rem",
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "#4e4d93",
//         secondary: "#F9F9F9",
//         accent: "#FF6F61",
//       },
//       fontFamily: {
//         clash: ["Clash Display", "sans-serif"],
//         satoshi: ["Satoshi", "sans-serif"],
//       },
//       boxShadow: {
//         custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         deep: "0 8px 12px rgba(0, 0, 0, 0.2)",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },

//       // ✅ Custom Animations
//       animation: {
//         slide: "slideDown 0.5s ease-out forwards", // Slide animation
//         fade: "fadeIn 0.8s ease-in-out",          // Fade-in animation
//         bounce: "bounceEffect 1s infinite",       // Bounce animation
//       },

//       // ✅ Custom Keyframes
//       keyframes: {
//         slideDown: {
//           "0%": { transform: "translateY(-100%)", opacity: "0" },
//           "100%": { transform: "translateY(0)", opacity: "1" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         bounceEffect: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-10px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;





import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'; // ES Module import

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        26: "6.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4e4d93",
        secondary: "#F9F9F9",
        accent: "#FF6F61",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
        deep: "0 8px 12px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            fontFamily: 'Satoshi, sans-serif',
            h1: {
              fontFamily: 'Clash Display, sans-serif',
              fontWeight: 'bold',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              color: '#4e4d93',
            },
            h2: {
              fontFamily: 'Clash Display, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              color: '#4e4d93',
            },
            h3: {
              fontFamily: 'Clash Display, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              color: '#4e4d93',
            },
            h4: {
              fontFamily: 'Clash Display, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              color: '#4e4d93',
            },
            p: {
              fontFamily: 'Satoshi, sans-serif',
              lineHeight: '1.75rem',
              marginBottom: '1rem',
            },
            a: {
              color: '#FF6F61',
              textDecoration: 'underline',
              transition: 'color 0.3s ease',
            },
            'a:hover': {
              color: '#D94A39',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginBottom: '1rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginBottom: '1rem',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: '#4e4d93',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#666',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,  // Use the imported typography plugin here
  ],
} satisfies Config;
