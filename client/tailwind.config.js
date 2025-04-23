/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Fredoka: ["Fredoka", "sans-serif"],
        FredokaExpanded: ["Fredoka Expanded", "sans-serif"],
        Toroka: ["Toroka", "sans-serif"],
      },
      colors: {
        oscuro: "#0F1E24",
        main: "#122830",
        secondary: "#1A3641",
        contrast: "#5589A4",
        sunsetSoft: "#FCB454",
        sunsetBold: "#df8f18",
        dividers: "#2C4A5A",
        accentSoft: "#4CA7C3",
        accentBold: "#2BB3D5",
      },
    },
  },
  plugins: [],
};
