/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(14, 45%, 36%)',
        secondary: 'hsl(332, 51%, 32%)',
        'roseWhite': 'hsl(330, 100%, 98%)',
        'eggShell': 'hsl(30, 54%, 90%)',
        'lightGrey': 'hsl(30, 18%, 87%)',
        'wengeBrown': 'hsl(30, 10%, 34%)',
        'darkCharcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        young: ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

