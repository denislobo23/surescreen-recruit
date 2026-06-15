import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c6d7c7",
          300: "#9dba9e",
          400: "#6e976f",
          500: "#4d784e",
          600: "#3b5e3c",
          700: "#304c31",
          800: "#283d29",
          900: "#213222",
        },
        blush: {
          50: "#fdf5f0",
          100: "#fbe8da",
          200: "#f6ccb3",
          300: "#f0a882",
          400: "#e87a4a",
          500: "#e05a26",
          600: "#c9431b",
          700: "#a73317",
          800: "#882a17",
          900: "#6f2416",
        },
        warm: {
          50: "#faf9f7",
          100: "#f2efe9",
          200: "#e5dfd5",
          300: "#d4cab8",
          400: "#bfae96",
          500: "#a8957a",
          600: "#8f7a63",
          700: "#756351",
          800: "#615246",
          900: "#51453c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
