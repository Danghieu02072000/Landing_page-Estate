/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/js/main.js"
],
  theme: {
    extend: {
      fontFamily : {
        'Manrope' : ['Manrope', 'sans-serif'],
        'DM-san': ['DM Sans','sans-serif'],
      },
      colors: {
        'gray': '#31353B',
        'gray1': '#666666',
        'gray2': '#545A58',
        'gray3': '#333333',
        'orangef9': '#FF9900',
        'orangef8': '#F85A47',
      },
      screens: {
        '2sm': '450px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

