module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: '#4ABEBD',
        darkBlue: '#2BB3B1',
        textBlue: '#E4FFFF',
        textGreen: '#C3D75E',
        textLightGreen: '#8EE8E6',
        textLightBlueGreen: '#E4FFFF',
        textYellow: '#FCFFC1',
        textGray: '#BCC3C9'
      },

      fontFamily: {
        primary: ['Karla', 'sans-serif']
      },

      dropShadow: {
        primary: '1px 10px 20px #CBDCEC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
