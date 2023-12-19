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
        TEXT_PRIMARY: "#E54B4B",
        TEXT_NEUTRAL: "#F7EBE8",
      },
      backgroundImage: {
        heroBackground: "url('/mainBackground.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
