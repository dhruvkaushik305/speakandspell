/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        studentsOnTable: "url('./assets/students-on-table.jpg')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        CelticBlue: "#226CE0",
        OxfordBlue: "#0E1428",
        Platinum: "#E1E6E1",
        Sunglow: "#FDCC3E",
        Primary: "#FFFFFF",
        Secondary: "#7A7978",
        Tertiary: "#01244E",
      },
    },
  },
  plugins: [],
};
