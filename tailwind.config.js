/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f5',
          100: '#ffe5e5',
          200: '#ffc2c2',
          300: '#ff9e9e',
          400: '#ff7a7a',
          DEFAULT: '#ff5252',
          600: '#cc4242',
          700: '#993131',
          800: '#662121',
          900: '#331010',
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
  plugins: [require('@tailwindcss/container-queries')],
};
