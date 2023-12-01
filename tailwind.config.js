/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors: {
        red: "#FA320A",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        // md: "3.5rem",
        // lg: "6rem",
        xl: "5%",
        "2xl": "5%",
      },
    },
  },
  plugins: [],
};
