/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        CelticBlue: "#226CE0",
        OxfordBlue: "#0E1428",
        Platinum: "#E1E6E1",
      },
    },
  },
  plugins: [],
};
