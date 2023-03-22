/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

colors:{
black:"#000000",
white:"#fdfdfd",
blue:"#1e90ff",
gray:"#383838",
 

},

fontSize:{

  huge:'clamp(2.4rem,6vw,3rem)',
},

fontFamily:{

  roboto:['Roboto','san-serif']
}

    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       
      },
    }
  },
  plugins: [],
}
