/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('/images/background-light.jpg')",
        'dark': "url('/images/background-dark.jpg')",
      },
    },
    fontFamily: {
      'star-jedi': ['Star Jedi', 'sans-serif'],
      'starjout': ['Starjout', 'sans-serif'],
    },
  },
  plugins: [],
};
