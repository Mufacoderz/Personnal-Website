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
        primary: '#0149FF',
        secondary: '#000222'
      } 
    },
  },
  plugins: [],
}

