/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#1c1c1c',
          200: '#2a2a2a',
          300: '#3a3a3a',
          400: '#4a4a4a',
        },
        light: {
          DEFAULT: '#f5f5f5',
          100: '#e0e0e0',
          200: '#cccccc',
        },
        accent: {
          DEFAULT: '#D4AF37', // Elegant Gold
          light: '#e6c86a',
          dark: '#aa8c2c',
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, rgba(10, 10, 10, 1) 50%)',
      }
    },
  },
  plugins: [],
};