/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
