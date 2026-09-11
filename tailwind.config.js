/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EB0029',
          'red-dark': '#C4001F',
          'red-soft': '#FDE6EA',
          dark: '#111822',
          'dark-soft': '#1C2530',
          light: '#F0F0F2',
          'light-dim': '#E4E4E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        card: '18px',
        btn: '11px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
