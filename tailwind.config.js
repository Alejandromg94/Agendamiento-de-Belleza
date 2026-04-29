/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F0F0F", // Deep Matte Black
          light: "#1A1A1A",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#D4AF37", // Metallic Gold
        },
        accent: {
          DEFAULT: "#C5A059", // Classic Gold
          light: "#F3E5AB", // Champagne
          dark: "#A6864A",
        },
        gold: {
          50: "#FFFDF5",
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FBBF24",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#926B07",
          800: "#785006",
          900: "#451a03",
        }
      },
    },
  },
  plugins: [],
};
