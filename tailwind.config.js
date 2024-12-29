/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/css/**/*.css",
    "./src/**/*.{js,css}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1573FF',
        secondary: '#000222'
      } 
    },
  },
  plugins: [],
}

