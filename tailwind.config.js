/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#051025',
        'gold-light': '#FCEda4',
        'gold-mid': '#D4AF37',
        'gold-dark': '#8a6e15',
        'gold-text': '#E5C568',
      },
      boxShadow: {
        'gold-btn': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'gold-inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: [],
}