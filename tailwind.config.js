/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#F8F7F1",
        lightText: "#000000",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#e25822",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #bfbfbf, -10px -10px 19px #F8F7F1",
      },
    },
  },
  plugins: [],
};
