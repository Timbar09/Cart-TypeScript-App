/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f67878',
          DEFAULT: '#FF5252',
          dark: '#cd3535',
        },
        text: {
          primary: '#111',
          secondary: '#757575',
        },
        background: {
          primary: '#f9f9f9',
          secondary: '#fff',
        },
      },
    },
  },
  plugins: [],
};
