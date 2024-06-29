/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './layouts/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

