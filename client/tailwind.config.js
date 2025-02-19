/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Colores personalizados
        "azul-principal": "#004E8A",
        "azul-secundario": "#0077B6",
        "azul-terciario": "#3180CE",
        "azul-cuaternario": "#72ABF0",
        "gris-oscuro": "#333333", // color principal del texto
        "gris-claro": "#F5F5F5",
        "gris-medio": "#4A4A4A",
        "gris-neutral": "#B3B3B3",
        "gris-text": "#797474", // color subtexto
        "acento-naranja": "#FF6B35", // bordes
        "naranja-suave": "#FFD166",
        "verde-azulado": "#00A6A6",
      },
    },
  },
  plugins: [],
};
