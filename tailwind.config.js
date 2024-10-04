/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffdcdc',
          200: '#ffbaba',
          300: '#ff9797',
          400: '#ff7575',
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
