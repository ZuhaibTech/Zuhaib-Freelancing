/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0a',  // The main background (Black)
          gray: '#1e293b',  // Panel gray
          blue: '#00f0ff',  // Tech accent (Neon Blue)
          orange: '#ff6b00', // Fitness accent (Neon Orange)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // ADDED: Custom Animation for the spinning React logo
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}