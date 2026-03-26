/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lan: {
          primary: '#052659',
          secondary: '#5483B3',
          accent: '#C1E8FF',
          soft: '#7DA0CA',
          dark: '#021024',
          ai: '#7C3AED',
          bot: '#16A34A',
        },
      },
      boxShadow: {
        'soft-lg': '0 20px 40px rgba(15, 23, 42, 0.18)',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
