const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
    },
    colors: {
      gray: colors.slate,
      black: colors.slate[900],
      white: colors.white,
      primary: colors.blue
    },
    container: {
      center: true,
      screens: '1600px'
    },
    extend: {},
  },
  plugins: [],
}
