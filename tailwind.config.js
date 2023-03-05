/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },

      container: {
        center: true,
        screens: {
          sm: "480px",
          md: "480px",
          lg: "640px",
          xl: "768px",
          "2xl": "1024px",
        },
      },

      colors: {
        black: {
          100: "#d5d6d6",
          200: "#abadad",
          300: "#808585",
          400: "#565c5c",
          500: "#2c3333",
          600: "#232929",
          700: "#1a1f1f",
          800: "#121414",
          900: "#090a0a",
        },

        blue: {
          100: "#cfe6e7",
          200: "#9fcdcf",
          300: "#6eb5b8",
          400: "#3e9ca0",
          500: "#0e8388",
          600: "#0b696d",
          700: "#084f52",
          800: "#063436",
          900: "#031a1b",
        },

        gray: {
          100: "#fcfcfc",
          200: "#f8f8f8",
          300: "#f5f5f5",
          400: "#f1f1f1",
          500: "#eeeeee",
          600: "#bebebe",
          700: "#8f8f8f",
          800: "#5f5f5f",
          900: "#303030",
        },
      },
    },
  },
  plugins: [],
};
