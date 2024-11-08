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
          secondary:'#171717'
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
      backgroundImage:{
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
      },
      fontFamily:{
        radley: ['Radley', 'serif'], // Custom font for Radley
        imFell: ['Im Fell English', 'serif'], // Custom font for Im Fell
      },
      fontSize:{
        sm:'20px',
        mid:'32px',
        base:'38px',
        xl:'80px',
      },
      inset:{
        '17vh': '17vh',
      },
    },
  },
  plugins: [],
}

