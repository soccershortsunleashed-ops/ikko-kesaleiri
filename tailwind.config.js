/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EE",
        sand: "#FDEFD9",
        orange: {
          DEFAULT: "#EC6A0E",
          soft: "#F6B708",
        },
        grape: {
          DEFAULT: "#9B51E0",
          deep: "#6A2CA0",
        },
        ink: "#2A1A10",
        berry: "#F00069",
      },
      fontFamily: {
        display: ["'Yeseva One'", "serif"],
        head: ["'Oswald'", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        bubble: "0 18px 50px -12px rgba(106, 44, 160, 0.35)",
        warm: "0 24px 60px -18px rgba(236, 106, 14, 0.45)",
      },
    },
  },
  plugins: [],
};
