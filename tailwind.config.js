/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#07070A',
        surface: '#0D0E12',
        elevated: '#12141A',
        violet: {
          DEFAULT: '#7667FF',
          light: '#9B91FF',
        },
        text: {
          primary: '#F5F5F2',
          secondary: '#9699A5',
        },
        status: {
          success: '#43D6A3',
          warning: '#F4B860',
          failure: '#FF6B6B',
        },
        border: 'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
