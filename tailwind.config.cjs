/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#000',
      'white': '#FFF',

      gray: {
        300: '#8B9096',
        500: '#676B70',
      },

      brown: {
        100: '8A8177',
      },

      orange: {
        200: '#FFBC6F',
        400: '#FFA236',
      },

      blue: {
        100: '#EBF2FF',
        200: '#8BC8EA',
        300: '#61B8E8',
      },

    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        cursive: 'Zeyada, cursive'
      }
    },
  },
  plugins: [],
}
