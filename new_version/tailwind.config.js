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
        MAIN: "#242A38",
        PRIMARY: "#F66C62",
        PRIMARY_TWO: "#4E596F",
        NUTRAL: "#FFFFFF",
      },
      backgroundImage: {
        "heroBackground": "url('/mainBackground.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
