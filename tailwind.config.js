/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
    colors: {
      primary: {
        light: colors.gray[400],
        DEFAULT: colors.gray[800],
        dark: colors.gray[900]
      },
      secondary: {
        light: colors.cyan[400],
        DEFAULT: colors.cyan[800],
        dark: colors.cyan[900]
      },
      accent: {
        light: colors.emerald[400],
        DEFAULT: colors.emerald[800],
        dark: colors.emerald[900]
      },
      bgGradientFrom: "#1b2735",
      bgGradientTo: "#090a0f",
      bgGradientCardFrom: "#2e3a4c",
      bgGradientCardTo: "#1f2633",
      borderColor: colors.cyan[600],
      focusColor: colors.emerald[500]
    }
  },
  plugins: []
}
