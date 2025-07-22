document.addEventListener("DOMContentLoaded", () => {

  const cursosNombres = {
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
    "liderazgo-gestion": "Liderazgo y Gestión para la Sustentabilidad",
    "ginecologia-planificacion": "Ginecología y Planificación Familiar",
    "ginecologia-infanto": "Ginecología Infato Juvenil",
    "ginecologia-patologica": "Ginecología Patológica y Oncología",
    "obstetricia-patologica": "Obstetricia Patológica",
    "neonatologia-fisiologica": "Neonatología Fisiológica",
    "neonatologia-patologica": "Neonatología Patológica",
    "salud-sexual-i": "Salud Sexual y Reproductiva con Enfoque de Género I",
    "salud-sexual-ii": "Salud Sexual y Reproductiva con Enfoque de Género II",
    "bioestadistica": "Bioestadística para la Investigación",
    "metodologia-investigacion": "Metodología de la Investigación",
    "practica-tecnicas": "Práctica de Técnicas Aplicadas en Matronería",
    "practica-integrada-go": "Práctica Integrada de Ginecología y Obstetricia",
    "practica-integrada-aps": "Práctica Integrada de Matronería en APS y Comunidad",
    "practica-neonatologia": "Práctica de Neonatología y Puericultura",
    "practica-gineco-especialidades": "Práctica Gineco-Obstetricia en Especialidades en Nivel Secundario",
    "practica-obstetricia-terciario": "Práctica de Obstetricia en Nivel Terciario",
    "practica-salud-sexual": "Práctica de Salud Sexual Ambulatoria",
    "trabajo-equipo": "Trabajo en Equipo para la Humanización en Salud",
    "gerontologia-mujer": "Gerontología de la Mujer",
    "gestion-liderazgo": "Gestión y Liderazgo en Matronería",
    "climaterio-piso-pelvico": "Climaterio y Bases para el Manejo de Piso Pélvico",
    "sexologia-clinica": "Sexología Clínica",
    "seminario-grado-i": "Seminario Grado I",
    "seminario-grado-ii": "Seminario Grado II",
    "optativo-profesional-i": "Optativo de Profesionalización I",
    "optativo-profesional-ii": "Optativo de Profesionalización II",
    "optativo-profesional-iii": "Optativo de Profesionalización III",
    "ultrasonografia": "Bases de Ultrasonografía en Obstetricia y Ginecología",
    "internado-hospitalario-i": "Internado Hospitalario Gineco-Obstétrico I",
    "internado-hospitalario-ii": "Internado Hospitalario Gineco-Obstétrico II",
    "internado-aps-i": "Internado en APS I",
    "internado-aps-ii": "Internado en APS II",
    "internado-electivo-i": "Internado Electivo de Matronería I",
    "internado-electivo-ii": "Internado Electivo de Matronería II"
  };

  function cerrarTodos() {
    document.querySelectorAll(".curso.abierto").forEach(c => {
      c.classList.remove("abierto");
      const sub = c.querySelector(".subcurso");
      if (sub) sub.remove();
    });
  }

  document.querySelectorAll(".curso").forEach(cursoElem => {
    cursoElem.addEventListener("click", () => {
      const id = cursoElem.dataset.id;
      const abre = cursoElem.dataset.abre;

      if (cursoElem.classList.contains("abierto")) {
        cursoElem.classList.remove("abierto");
        const sub = cursoElem.querySelector(".subcurso");
        if (sub) sub.remove();
      } else {
        cerrarTodos();

        cursoElem.classList.add("abierto");

        if (abre) {
          const nombreSub = cursosNombres[abre] || "Curso desconocido";
          const divSub = document.createElement("div");
          divSub.classList.add("subcurso");
          divSub.textContent = nombreSub;
          cursoElem.appendChild(divSub);
        }
      }
    });
  });

});
