/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: "#1e90ff", // azul personalizado
      },
      spacing: {
        72: "18rem", // nuevo espaciado
      },
      screens: {
        xs: "480px", // nuevo breakpoint
      },
      width: {
        "custom-w": "500px", // ancho personalizado
      },
      minWidth: {
        "custom-min-w": "200px", // min-width personalizado
      },
      minHeight: {
        "custom-min-h": "300px", // min-height personalizado
      },
    },
  },
  plugins: [],
};
document.addEventListener('DOMContentLoaded', function() {
  console.log('Tailwind JS cargado correctamente.');
});
