/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFpro: ["SF-Pro", "sans"],
        SFproDisplay: ["SF-Pro-display", "sans"]
      },
      colors: {
        'regal-gray': '#86868b',
      },
      keyframes: {
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(20px)',
          },
        },
      }
    },

  },

  plugins: [
    require('tailwindcss-animated')
  ],

});

