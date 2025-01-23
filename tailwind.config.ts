


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
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        bounce: 'bounce 1s infinite',
        'spin-slow': 'spin 3s linear infinite',
        moveSlow: 'moveSlow 5s ease-in-out infinite', // New slow-moving animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        moveSlow: {
          '0%': { transform: 'translateX(-20%)' }, // Start from left
          '50%': { transform: 'translateX(5%)' }, // Move to the middle
          '100%': { transform: 'translateX(-5%)' }, // End at right
        },
      },
    },
    animation: {
      "ball-zoom": "ballZoom 2s ease-in-out infinite",
    },
    keyframes: {
      ballZoom: {
        "0%": {
          transform: "scale(1) translateZ(0px)",
          opacity: "1",
          boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.6)",
        },
        "50%": {
          transform: "scale(0.5) translateZ(-200px)",
          opacity: "0.4",
          boxShadow: "0 0 40px 10px rgba(255, 255, 255, 0.3)",
        },
        "100%": {
          transform: "scale(1) translateZ(0px)",
          opacity: "1",
          boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.8)",
        },
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },

    
  },
  plugins: [
    typography, // Use the imported typography plugin here
  ],
} satisfies Config;
