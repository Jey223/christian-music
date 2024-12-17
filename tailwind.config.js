/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        playRotate: {
          'to': {transform: 'rotate(360deg)',
            transition: 'all 0.3s ease'
          }
        }
      },
      animation: {
        playRotate: 'playRotate 6s infinite forwards linear'
      }
    },
  },
  plugins: [],
}

