/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        513: "513px",
        606: "600px",
      },
      height: {
        111: "1px",
        750: "750px",
      },
      fontSize: {
        22: "22px",
      },
    },
  },
  plugins: [],
};
