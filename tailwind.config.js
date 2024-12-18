/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"],
    defaultTheme: "cupcake",
  },
  plugins: [require("daisyui")],
};
