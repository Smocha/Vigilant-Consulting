/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#1e293b',
          DEFAULT: '#0f172a',
          dark: '#0a1120'
        }
      }
    },
  },
  plugins: [],
};