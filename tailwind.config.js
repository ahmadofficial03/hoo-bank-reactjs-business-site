/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
        },
        green: colors.green,
        pink: colors.pink
      }
    },
  },
  plugins: [],
}