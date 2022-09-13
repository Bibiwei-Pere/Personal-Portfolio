module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     listStyleType: {
      square: 'square',
  },
  },
  },
  plugins: [],
  plugins: [require("daisyui")],
};
