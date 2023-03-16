const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: colors.yellow,
        'background-light': colors.yellow[100],
        background: colors.yellow[400],

        neutral: { ...colors.slate, default: colors.slate[100] },

        primary: { ...colors.yellow, default: colors.yellow[400] },
        secondary: { ...colors.sky, default: colors.sky[400] },

        light: colors.slate['300'],
        p: colors.slate['700'],
        header: colors.slate['800'],
      },
    },
  },
  plugins: [],
}
