/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        darkPurple: '#34204A', // Custom darker purple color
      },
    },
  },
  plugins: [],
}