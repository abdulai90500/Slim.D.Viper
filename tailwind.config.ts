import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0c",
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8f9fa",
          light: "#f1f3f5",
          dark: "#0a0a0c",
          border: "#e5e7eb",
        },
        gold: {
          50: "#fefcf4",
          100: "#fcf8e3",
          200: "#f8edbc",
          300: "#f2dc89",
          400: "#eac452",
          500: "#d4af37", // Imperial Gold
          600: "#b58e24",
          700: "#8f6c1e",
          800: "#75561e",
          900: "#62471d",
        },
      },
      fontFamily: {
        heading: ["var(--font-heebo)", "Montserrat", "system-ui", "sans-serif"],
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "Heebo", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
