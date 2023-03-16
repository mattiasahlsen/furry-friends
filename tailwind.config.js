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

        primary: colors.sky,

        light: colors.slate['600'],
        p: colors.slate['700'],
        header: colors.slate['800'],
      },
    },
  },
  plugins: [],
}
