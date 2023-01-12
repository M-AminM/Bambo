/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "400": "400px",
        "300": "300px"
      }
    },
    colors: {
      gray1: "#004458",
      green: "#088568",
      a: "#D1D1D1",
      white: "#fff",
      black: "#000",
      green: "#09B28B",
      yellow: "#F7DF1E",
      blue: "#6A1577",
      pink: "#CAB2EF",
      midBlue: "#FFC7F8",
      midRed: "#7C3D72",
      bbb: "#D1D1D1",
      footerBg: "#003544",
      transparent: "transparent",
      red: "#ff4a59"
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: {
        max: "768px",
      },
      // => @media (max-width: 768px) { ... }

      lg: {
        max: "1024px",
      },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
