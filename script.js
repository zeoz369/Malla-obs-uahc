document.addEventListener("DOMContentLoaded", () => {

  // Función para crear el elemento subramo
  function crearSubramo(nombre, id) {
    const div = document.createElement("div");
    div.classList.add("subramo");
    div.textContent = nombre;
    div.dataset.id = id;
    return div;
  }

  // Mapeo id -> nombre del ramo para mostrar al abrir
  const cursosMap = {
    // Primer año
    "intro-matroneria": "Introducción a la Matronería y la Atención Humanizada",
    "anatomia-general": "Anatomía general",
    "biologia-celular": "Biología Celular y Molecular",
    "quimica-general": "Química General",
    "ant
