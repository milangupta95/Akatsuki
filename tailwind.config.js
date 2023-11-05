/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: {
      'blue-pattern': "url('registrationbackground.jpg')",
      'shop-filler' : "url('shopfiller.jpg')",
      'background-filler' : "url('background.jpg')"
    }}
  },
  plugins: [],
}