/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'triangle-down': 'polygon(50% 100%, 0 0, 100% 0)',
      },
      colors: {
        customGreen: '#56CDAD',
      },
    },
  },
  plugins: [],
}