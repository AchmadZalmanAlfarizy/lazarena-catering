/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EA',
        'forest-olive': '#343F32',
        'champagne-gold': '#C6A76B',
        'deep-charcoal': '#25251F',
        cream: '#EEE9DE',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
