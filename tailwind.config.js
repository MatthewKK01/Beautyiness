/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "smalt-blue": {
          DEFAULT: "#5C8692",
          50: "#C9D8DD",
          100: "#BCCFD5",
          200: "#A3BEC5",
          300: "#8AACB5",
          400: "#719AA6",
          500: "#5C8692",
          600: "#466670",
          700: "#31474D",
          800: "#1B272B",
          900: "#050808",
          950: "#000000",
        },
        gumbo: {
          DEFAULT: "#7A9CA5",
          50: "#E8EEEF",
          100: "#DBE4E7",
          200: "#C3D2D6",
          300: "#ABC0C6",
          400: "#92AEB5",
          500: "#7A9CA5",
          600: "#5D808A",
          700: "#476168",
          800: "#304247",
          900: "#192325",
          950: "#0E1315",
        },
        "ebony-clay": {
          DEFAULT: "#1E2C30",
          50: "#66939F",
          100: "#5D8894",
          200: "#4D717B",
          300: "#3D5A62",
          400: "#2E4349",
          500: "#1E2C30",
          600: "#080C0D",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
