/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      clear: "rgba(0, 0, 0, 0)",
      dark: {
        "100": "#17202A",
        "200": "#1C2733",
        "300": "#283340",
        "400": "#3A444C",
        "500": "#5B7083",
        "600": "#8899A6",
        "650": "#CFD9DE",
        "700": "#EBEEF0",
        "800": "#F7F9F9",
      },
      greyTxt: "#536471",
      white: "#FFFFFF",
      black: "#0F1419",
      blackHov: "#0f14191a",
      blue: "#1DA1F2",
      searchbar: "#EFF3F4"
    },
    extend: {},
  },
  plugins: [],
};
