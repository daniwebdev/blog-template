/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').colors } */

var colors = require('tailwindcss/colors');


module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,css}"],
  
  theme: {
    extend: {
      'colors': {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      }
    },
  },
  plugins: [],
}
