/* eslint-disable no-undef */
module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{scss,module.scss}',
  ],
  theme: {
    screens: {
      mobile: '370px',
      desktop: '692px',
      'real-desktop': '1025px'
    },
    colors: {
      white: '#FFFFFF',
      black: '#35495e',
      'purple': '#a855f7',
      'gray' : '#e5e7eb',
      'purple-light': '#c084fc'
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};