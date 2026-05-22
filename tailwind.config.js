/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
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
        'glow-blue': '0 0 80px rgba(84, 131, 179, 0.3)',
        'glow-violet': '0 0 60px rgba(124, 58, 237, 0.2)',
        'card-hover': '0 24px 48px rgba(5, 38, 89, 0.15)',
        'hero-phone': '0 50px 120px rgba(2, 16, 36, 0.7)',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      backgroundImage: {
        'grid-dots': "radial-gradient(circle, rgba(84,131,179,0.12) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-dots': '32px 32px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        'shimmer': 'shimmer 2.5s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
