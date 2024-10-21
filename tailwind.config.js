/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          opensans: ["Open Sans", "sans-serif"],
          nunito: ["Nunito", "sans-serif"],
          arima: ["Arima", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          merriweather: ["Merriweather", "sans-serif"],
          robot: ["Roboto", "sans-serif"],
          nunitosans: ["Nunito Sans", "sans-serif"],
          worksans: ["Work Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          brooklynbold: ["BrooklynBold", "sans-serif"],
          brooklynsemibold: ["BrooklynSemiBold", "sans-serif"],
          blunt: ["Blunt", "sans-serif"],
      },
      colors: {
          'custom': {
              'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
                  102: '#1C75BC',
                  103: '#0094A1',
              },
              'red': {
                  100: '#F53636',
              },
              'white': {
                100: '#EAEAEAAA',
                101: '#D9E5EE',
              },
              'black': {
                100: '#1D1D1D',
              }
          }
      }
  },
  },
  plugins: [],
}

