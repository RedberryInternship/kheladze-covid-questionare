/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        513: "32.0625rem",
        606: "37.5rem",
      },
      height: {
        111: "0.063rem",
        750: "46.875rem",
      },
      fontSize: {
        22: "1.375rem",
      },
    },
  },
  plugins: [],
};
