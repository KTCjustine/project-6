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
          poppins: ["Poppins", "sans-serif"],
          oswald: ["Oswald", "sans-serif"],
          notosans: ["Noto Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          comfortaa: ["Comfortaa", "sans-serif"],
          publicsans: ["Public Sans", "sans-serif"],
      },
      colors: {
          'custom': {
              'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
                  102: '#0D6EFD',
              },
              'red': {
                  100: '#F53636',
                  101: '#F00',
                  102: '#FC0000',
              },
              'green': {
                  100: '#2A6260',
                  101: '#E8F2F1',
                  102: '#0C3936',
              },
              'black': {
                  100: '#0C3936',
                  101: '#383C44',
                  200: '#040D12',
                  300: '#242424',
                  400: '#5e5e5e',
                  500: '#252525',
                  600: '#01162C',
                  700: '#2C1C02',
                  800: '#333',
              },
              'yellow': {
                  100: '#E4A41A',
                  101: '#9D7435',
                  102: '#FBCA6D',
                  103: '#FED000',
                  104: '#E2A764',
              },
              'gray': {
                  100: '#F1F1F1',
                  101: '#99BBB8',
                  102: '#E2E2E2',
                  103: '#F5F5F4',
                  104: '#F4F3F0',
                  105: '#F3F3F3',
                  106: '#F7F7F7',
            },
            'brown': {
                100: '#3E3E3E',
            },
            'white': {
                100: '#F3F9FB',
            }
          }
      }
  },
  },
  plugins: [],
}

