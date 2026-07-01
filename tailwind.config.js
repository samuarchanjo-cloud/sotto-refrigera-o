/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0A1628",
        navy: "#0B1E3A",
        ice: "#22D3EE",
        cyanBrand: "#06B6D4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(34, 211, 238, 0.18)",
        soft: "0 16px 45px rgba(10, 22, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
