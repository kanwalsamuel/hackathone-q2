import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in the app directory
  ],
  theme: {
    extend: {
      spacing: {
        26: "6.5rem", // Adds custom spacing (e.g., `ml-26` or `pl-26`)
      },
      colors: {
        background: "var(--background)", // Extends color palette with CSS variable
        foreground: "var(--foreground)", // Extends color palette with CSS variable
        primary: "#4e4d93", // Example custom color for consistency
        secondary: "#F9F9F9", // Example secondary color
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"], // Custom font family
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow for buttons or cards
      },
    },
  },
  plugins: [],
} satisfies Config;
