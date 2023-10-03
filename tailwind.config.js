/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "phone": "1px",
        "3xl": "2000px",
        "4xl": "2300px",
        "mdl": "880px",
        "hola": "1650px",
      },
    },
  },
  plugins: [],
}

