/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url('/images/pic 2.png')",
      },
    },
  },
  plugins: [],
}