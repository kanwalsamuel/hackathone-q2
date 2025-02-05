import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      animation: {
        "ball-zoom-fast": "ball-zoom-fast 0.8s ease-in-out infinite",
        "shutter-down": "shutterDown 1s ease-out forwards",
      },
      keyframes: {
        "ball-zoom-fast": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.8" },
        },
        shutterDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },
  },
  plugins: [],
} satisfies Config;
