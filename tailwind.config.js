/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'Manrope' : ['Manrope', 'sans-serif'],
        'DM-san': ['DM Sans','sans-serif'],
      },
      colors: {
        'gray': '#31353B',
        'gray1': '#666666',
        'orangef9': '#FF9900',
        'orangef8': '#F85A47',
      }
    },
  },
  plugins: [],
}

