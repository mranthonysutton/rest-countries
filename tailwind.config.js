module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        veryLightGray: 'hsl(0, 0%, 98%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        darkBlue: 'hsl(209, 23%, 22%)'
      }
    },
    minHeight: {
      '1/2': '50%'
    },
    maxHeight: {
      '1/2': '50%'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
