/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': 'linear-gradient(90deg, rgba(3, 40, 85, 1) 0%, rgba(0, 16, 36, 1) 100%)',
      },
    },
  },
  plugins: [],
}

