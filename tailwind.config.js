/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
        },
        primary: {
          DEFAULT: '#1d1283',
          light: '#041187',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#aeaeae',
        }
      },
    },
  },
  plugins: [],
}
