/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'fondo-light': 'linear-gradient(90deg, rgba(3, 40, 85, 1) 0%, rgba(0, 16, 36, 1) 100%)',
        'fondo-dark': 'linear-gradient(90deg, rgba(10, 50, 100, 1) 0%, rgba(0, 20, 40, 1) 100%)',
        'text-dark': 'linear-gradient(90deg, #2dd4bf, #60a5fa)',
        'text-ligth': 'linear-gradient(90deg, #4b6cb7, #182848)'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-dark': {
          background: 'linear-gradient(90deg, #2dd4bf, #60a5fa)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-light': {
          background: 'linear-gradient(90deg, #4b6cb7, #182848)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}