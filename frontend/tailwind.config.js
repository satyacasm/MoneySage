/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        red: "#fa2870",
        grey: "#7c838a",
        black: "#1d2123",
      },
      backgroundImage: {
        login: "url('../src/assets/images/bg.png')",
      },
      spacing: {
        '1/8': '12.5%',
      }
    },
  },
  plugins: [],
};
