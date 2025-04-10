/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['Lemon Milk', 'sans-serif'],
        kopik: ['Kopik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};