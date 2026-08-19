/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#121217',
        elevated: '#1A1A22',
        violet: {
          DEFAULT: '#7C5CFF',
          light: '#9E85FF',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          failure: '#EF4444',
          info: '#38BDF8',
        },
        border: 'rgba(255,255,255,0.08)',
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
