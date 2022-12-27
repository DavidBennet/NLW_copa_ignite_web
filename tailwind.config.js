/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, sans-serif',
        lobster: 'Lobster, sans-serif',
      },
      colors: {
        verde: {
          500: '#129E57',
        },
        grayIgnite: {
          300: '#8D8D99',
          800: '#323238',
        },
        yellowIgnite: {
          400: '#F7DD43'
        },
      },
    },
  },
  plugins: [],
}
