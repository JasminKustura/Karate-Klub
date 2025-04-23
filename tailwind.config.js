/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%': { backgroundColor: 'black' },
          '33%': { backgroundColor: 'white' },
          '66%': { backgroundColor: 'red' },
          '100%': { backgroundColor: 'black' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        colorCycle: 'colorCycle 10s infinite',
        gradientShift: 'gradientShift 6s ease infinite',
      },
    },
  },
  plugins: [],
};