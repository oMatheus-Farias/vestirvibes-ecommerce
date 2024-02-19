/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "height-cartMenu": "calc(100vh - 60px)",
      },
      colors: {
        primary: "#E74C3C",
        white: "#F3F3F3",
        dark: "#212529",
        grayLight: "#E9ECEF",
        redColor: "#EC0000",
        transparentBlack: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
