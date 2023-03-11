/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc7613",
        neutral: {
          50: "#fbffff",
          100: "#7a808b",
          200: "#272e38",
          300: "#1d232d",
          400: "#141518",
        },
      },
    },
  },
  plugins: [],
};
