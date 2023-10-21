/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    // custom color palette
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "background-light": "#1E1B1E",
      green: "#00C39A",
      yellow: "#FFBF3C",
      pink: "#FF803C",
      purple: "#00ABE7",
      red: "#FF2E2E",
      color: {
        200: "#FAFAFF",
        300: "#F9F9FF",
        400: "#F2F1FA",
        500: "#E7E6F2",
        600: "#D4D2E3",
        700: "#BCBACD",
        800: "#ADABC3",
        850: "#747396",
        900: "#55546E", //"#8D8BA7",
        1000: "#514F63", //"#767494",
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
    },
    extend: {
      spacing: {
        x_padding_page: "9rem",
        y_padding_page: "2rem",
        x_padding_page_mobile: "1rem",
        y_padding_page_mobile: "1rem",
        inner_space: "1rem",
      },
      borderRadius: {
        card_radius: "15px",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};
