/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Primary-font", sans-serif'],
        secondary: ['"Secondary-font", sans-serif']
      },
      colors: {
        amarillo: '#F6CF30',
        oscuro: '#0D0D0D',
        amarillo_footer: '#D5B32C',
        amarillo_oscuro: '#9b7c00'
      }
    },
  },
  plugins: [],
}

