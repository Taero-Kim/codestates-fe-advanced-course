/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBlack: "#323232",
        defaultGray: "#999999",
        primary: "#452CDD",
      },
      keyframes: {
        dropdownOpen: {
          "0%": { opacity: 0, transform: "translateY(-10%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        alert: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        dropdownOpen: "dropdownOpen 500ms ease-in-out",
        alert: "alert 3000ms ease-in-out",
      },
    },
  },
  plugins: [],
};
