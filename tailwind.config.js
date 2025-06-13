// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#C8A2C8", // Digital Lavender
          light: "#E9D7EC",
          dark: "#A186B4",
        },
        sage: {
          DEFAULT: "#B2AC88", // Sage Green
          light: "#D8D3B7",
          dark: "#8A8667",
        },
      },
    },
  },
  plugins: [],
};
