/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
    extend: {
      colors: {
        gray_900_87: "#15171887",
        gray_900_99: "#15171899",
        gray_900: "#151718",
        deep_purple_A200: "#8554ee",
        gray_900_6c: "#1517186c",
        white_A700: "#ffffff",
      },
      fontFamily: { helveticaneue: "Helvetica Neue", archia: "Archia" },
    },
  },
  plugins: [],
}

