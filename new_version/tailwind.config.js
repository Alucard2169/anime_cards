/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        MAIN: "#000000",
        PRIMARY: "#03a9f4",
        PRIMARY_TWO: "#188fcd",
        PRIMARY_THREE:"#1f76a8",
        CARD: "#121b23",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),],
};
