/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          primary: '#242424',
          secondary:'#0B0B0B'
        },
        text:{
          title:'#F9DBB7',
          paragraph:'#FDECD8',
          divider:'#BA7345'
        }, 
        button:{
          active:"#C58244",
        }
      },
      fontFamily:{
        radley: ['Radley', 'serif'], // Custom font for Radley
        imFell: ['Im Fell English', 'serif'], // Custom font for Im Fell
      },
    },
  },
  plugins: [],
}

