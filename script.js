document.addEventListener("DOMContentLoaded", () => {

  // Mapa id -> nombre del curso para mostrar en subramo
  const cursosMap = {
    // Primer año
    "intro-matroneria": "Introducción a la Matronería y la Atención Humanizada",
    "anatomia-general": "Anatomía general",
    "biologia-celular": "Biología Celular y Molecular",
    "quimica-general": "Química General",
    "antropologia-salud": "Antropología de la Salud",
    "estrategias-vida-i": "Estrategias para la Vida Académica I",
    "anatomia-especifica": "Anatomía Específica Gineco-obtétrica y Neonatal",
    "microbiologia-aplicada": "Microbiología Aplicada y Parasitología",
    "embriologia-histologia": "Embriología Humana e Histología",
    "psicologia-general": "Psicología General en el Curso de la Vida",
    "bioquimica": "Bioquímica (Simbología: Laboratorio)",
    "salud-publica": "Salud Pública y Epidemiología",
    "ingles-i": "Inglés I",
    "estrategias-vida-ii": "Estrategias para la Vida Académica II",

    // Segundo año
    "fund-enfermeria-basica": "Fundamentos de Enfermería Básica en Gineco Obstetricia",
    "tecnicas-enfermeria": "Técnicas de Enfermería Medico Quirúrgicas en Gineco-Obstetricia",
    "obstetricia-salud-familiar": "Obstetricia en Salud Familiar y Comunitaria",
    "obstetricia-fisiologica": "Obstetricia Fisiológica",
    "psicologia-mujer": "Psicología de la Mujer",
    "fisiologia": "Fisiología",
    "primeros-auxilios": "Primeros Auxilios y Prevención de Riesgos",
    "farmacologia-general": "Farmacología General y Fundamentos de Administración Segura",
    "salud-colectiva": "Salud Colectiva para la Vida Sustentable",
    "derechos-humanos": "Derechos Humanos, Géneros e Interculturalidad",
    "etica-debates": "Ética y Debates Contemporáneos",
    "ingles-ii": "Inglés II",
    "ingles-iii": "Inglés III",

    // Tercer año
    "obstetricia-patologica": "Obstetricia Patológica",
    "ginecologia-planificacion": "Ginecología y Planificación Familiar",
    "fisiopatologia": "Fisiopatología",
    "liderazgo-gestion": "Liderazgo y Gestión para la Sustentabilidad",
    "trabajo-equipo": "Trabajo en Equipo para la Humanización en Salud",
    "ginecologia-infanto": "Ginecología Infato Juvenil",
    "neonatologia-fisiologica": "Neonatología Fisiológica",
    "salud-sexual-i": "Salud Sexual y Reproductiva con Enfoque de Género I (Simbología: Prácticas Curriculares y Talleres)",
    "bioestadistica": "Bioestadística para la Investigación",
    "practica-tecnicas": "Práctica de Técnicas Aplicadas en Matronería",
    "gerontologia-mujer": "Gerontología de la Mujer",
    "ginecologia-patologica": "Ginecología Patológica y Oncología",
    "practica-integrada-go": "Práctica Integrada de Ginecología y Obstetricia",
    "practica-integrada-aps": "Práctica Integrada de Matronería en APS y Comunidad",
    "neonatologia-patologica": "Neonatología Patológica",
    "salud-sexual-ii": "Salud Sexual y Reproductiva con Enfoque de Género II",
    "metodologia-investigacion": "Metodología de la Investigación",
    "optativo-profesional-i": "Optativo de Profesionalización I",
    "optativo-profesional-ii": "Optativo de Profesionalización II",
    "optativo-profesional-iii": "Optativo de Profesionalización III",
    "gestion-liderazgo": "Gestión y Liderazgo en Matronería",
    "climaterio-piso-pelvico": "Climaterio y Bases para el Manejo de Piso Pélvico",
    "practica-neonatologia": "Práctica de Neonatología y Puericultura",
    "sexologia-clinica": "Sexología Clínica",
    "seminario-grado-i": "Seminario Grado I",
    "seminario-grado-ii": "Seminario Grado II",
    "practica-gineco-especialidades": "Práctica Gineco-Obstetricia en Especialidades en Nivel Secundario",
    "practica-obstetricia-terciario": "Práctica de Obstetricia en Nivel Terciario",
    "practica-salud-sexual": "Práctica de Salud Sexual Ambulatoria",

    // Quinto año
    "internado-hospitalario-i": "Internado Hospitalario Gineco-Obstétrico I",
    "internado-hospitalario-ii": "Internado Hospitalario Gineco-Obstétrico II",
    "internado-aps-i": "Internado en APS I",
    "internado-aps-ii": "Internado en APS II",
    "internado-electivo-i": "Internado Electivo de Matronería I",
    "internado-electivo-ii": "Internado Electivo de Matronería II",
  };

  // Referencia a todos los ramos
  const ramos = document.querySelectorAll(".ramo");

  // Para guardar cuál subramo está abierto para cerrarlo cuando abro otro
  let ramoAbierto = null;

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      const abreId = ramo.getAttribute("data-abre").trim();

      // Si no abre nada, solo resaltar el ramo y cerrar cualquier abierto
      if (!abreId) {
        if (ramoAbierto) {
          cerrarSubramo(ramoAbierto);
          ramoAbierto = null;
        }
        limpiarDestacados();
        ramo.classList.add("abierto");
        return;
      }

      // Si ya está abierto y clickeo sobre el mismo, lo cierro
      if (ramoAbierto === ramo) {
        cerrarSubramo(ramoAbierto);
        ramoAbierto = null;
        return;
      }

      // Si otro ramo está abierto, cerrar primero
      if (ramoAbierto) {
        cerrarSubramo(ramoAbierto);
      }

      // Abrir nuevo subramo
      abrirSubramo(ramo, abreId);
      ramoAbierto = ramo;
    });
  });

  // Función para limpiar estilos abiertos
  function limpiarDestacados() {
    ramos.forEach(r => r.classList.remove("abierto"));
  }

  // Función para abrir subramo
  function abrirSubramo(ramo, abreId) {
    limpiarDestacados();
    ramo.classList.add("abierto");

    // Crear contenedor subramo
    const subramoDiv = document.createElement("div");
    subramoDiv.classList.add("subramo");
    subramoDiv.textContent = cursosMap[abreId] || "Nombre no disponible";

    // Insertar debajo del ramo clickeado
    ramo.insertAdjacentElement("afterend", subramoDiv);
  }

  // Función para cerrar subramo
  function cerrarSubramo(ramo) {
    limpiarDestacados();
    // Eliminar el siguiente nodo si es subramo
    const next = ramo.nextElementSibling;
    if (next && next.classList.contains("subramo")) {
      next.remove();
    }
  }
});
