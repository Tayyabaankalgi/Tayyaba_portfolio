import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#7c3aed",
          50: "#f5f3ff",
          100: "#EAF2FF",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#5b21b6",
          900: "#4c1d95"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
