// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d1283',
          light: '#041187',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#aeaeae',
        },
        accent: '#87d870',
      },
    },
  },
  plugins: [],
};
