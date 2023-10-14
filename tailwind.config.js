/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Serif", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        "1/24": "24%",
        "1/32": "32%",
        "1/45": "45%",
        "1/48": "48%",
      },
    },
  },
  plugins: [],
};

