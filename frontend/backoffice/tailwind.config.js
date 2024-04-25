/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '34': '8.5rem', // 30 pixels
      }
    },
  },
  plugins: [],
}

