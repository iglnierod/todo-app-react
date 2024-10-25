/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#111111",
          2: "#222222",
          3: "#333333",
          4: "#444444",
          5: "#555555",
          6: "#666666",
          7: "#777777",
          8: "#888888",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
