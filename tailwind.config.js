/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020c1b',
        },
        accent: {
          DEFAULT: '#64ffda',
        },
      },
    },
  },
  plugins: [],
};