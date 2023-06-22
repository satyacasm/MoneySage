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
        logo: "url('../src/assets/images/logo.png')",
      },
      spacing: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
      },
      minHeight: {
        nav: "60px",
      },
      minWidth: {
        sidebar: "160px",
      },
    },
  },
  plugins: [],
};
