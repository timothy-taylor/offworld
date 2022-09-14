module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#1b1b17",
        darker: "#423a40",
        dark: "#48505a",
        neutral: "#e4ebef",
        accent: "#a68494",
      },
      fontFamily: {
        notable: ["Notable", "sans-serif"],
        armata: ["Armata", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
