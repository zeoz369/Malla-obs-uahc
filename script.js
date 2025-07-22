document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    // Primer año - I semestre
    { id: "MAT101", nombre: "Introducción a la Matronería y la Atención Humanizada", prerequisitos: [], semestre: 1, linea: "Gestion" },
    { id: "BIO101", nombre: "Anatomía general", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "BIO201", nombre: "Biología Celular y Molecular", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "QUI101", nombre: "Química General", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "ANT101", nombre: "Antropología de la Salud", prerequisitos: [], semestre: 1, linea: "Disciplinar" },
    { id: "ACA101", nombre: "Estrategias para la Vida Académica I", prerequisitos: [], semestre: 1, linea: "Basica" },

    // Primer año - II semestre
    { id: "BIO102", nombre: "Anatomía Específica Gineco-obtétrica y Neonatal", prerequisitos: ["BIO101"], semestre: 2, linea: "Gestion" },
    { id: "BIO202", nombre: "Microbiología Aplicada y Parasitología", prerequisitos: ["BIO201"], semestre: 2, linea: "BaseCientifica" },
    { id: "EMB101", nombre: "Embriología Humana e Histología", prerequisitos: [], semestre: 2, linea: "BaseCientifica" },
    { id: "PSI101", nombre: "Psicología General en el Curso de la Vida", prerequisitos: [], semestre: 2, linea: "Promocion" },
    { id: "QUI102", nombre: "Bioquímica", prerequisitos: ["QUI101"], semestre: 2, linea: "BaseCientifica" },
    { id: "EPI101", nombre: "Salud Pública y Epidemiología", prerequisitos: [], semestre: 2, linea: "Disciplinar" },
    { id: "ING101", nombre: "Inglés I", prerequisitos: [], semestre: 2, linea: "BaseCientifica" },
    { id: "ACA102", nombre: "Estrategias para la Vida Académica II", prerequisitos: ["ACA101"], semestre: 2, linea: "Basica" },

    // Segundo año - III semestre
    { id: "FEN101", nombre: "Fundamentos de Enfermería Básica en Gineco Obstetricia", prerequisitos: [], semestre: 3, linea: "Gestion" },
    { id: "OBS101", nombre: "Obstetricia en Salud Familiar y Comunitaria", prerequisitos: [], semestre: 3, linea: "Gestion" },
    { id: "PSI201", nombre: "Psicología de la Mujer", prerequisitos: [], semestre: 3, linea: "Promocion" },
    { id: "FIS101", nombre: "Fisiología", prerequisitos: [], semestre: 3, linea: "BaseCientifica" },
    { id: "PRI101", nombre: "Primeros Auxilios y Prevención de Riesgos", prerequisitos: [], semestre: 3, linea: "BaseCientifica" },
    { id: "SAL101", nombre: "Salud Colectiva para la Vida Sustentable", prerequisitos: [], semestre: 3, linea: "Disciplinar" },
    { id: "DHH101", nombre: "Derechos Humanos, Géneros e Interculturalidad", prerequisitos: [], semestre: 3, linea: "General" },
    { id: "ING102", nombre: "Inglés II", prerequisitos: ["ING101"], semestre: 3, linea: "BaseCientifica" },

    // Segundo año - IV semestre
    { id: "TEN101", nombre: "Técnicas de Enfermería Medico Quirúrgicas en Gineco-Obstetricia", prerequisitos: ["FEN101"], semestre: 4, linea: "Gestion" },
    { id: "OBS102", nombre: "Obstetricia Fisiológica", prerequisitos: ["OBS101"], semestre: 4, linea: "Gestion" },
    { id: "GIN101", nombre: "Ginecología y Planificación Familiar", prerequisitos: [], semestre: 4, linea: "Promocion" },
    { id: "FIS102", nombre: "Fisiopatología", prerequisitos: ["FIS101"], semestre: 4, linea: "BaseCientifica" },
    { id: "FAR101", nombre: "Farmacología General y Fundamentos de Administración Segura", prerequisitos: ["PRI101"], semestre: 4, linea: "BaseCientifica" },
    { id: "LID101", nombre: "Liderazgo y Gestión para la Sustentabilidad", prerequisitos: [], semestre: 4, linea: "Disciplinar" },
    { id: "ETI101", nombre: "Ética y Debates Contemporáneos", prerequisitos: ["DHH101"], semestre: 4, linea: "General" },
    { id: "ING103", nombre: "Inglés III", prerequisitos: ["ING102"], semestre: 4, linea: "BaseCientifica" },

    // Tercer año - V semestre
    { id: "TRA101", nombre: "Trabajo en Equipo para la Humanización en Salud", prerequisitos: [], semestre: 5, linea: "Gestion" },
    { id: "GIN102", nombre: "Ginecología Infato Juvenil", prerequisitos: [], semestre: 5, linea: "Gestion" },
    { id: "OBS103", nombre: "Obstetricia Patológica", prerequisitos: ["OBS102"], semestre: 5, linea: "Gestion" },
    { id: "NEO101", nombre: "Neonatología Fisiológica", prerequisitos: [], semestre: 5, linea: "Gestion" },
    { id: "SSR101", nombre: "Salud Sexual y Reproductiva con Enfoque de Género I", prerequisitos: [], semestre: 5, linea: "Promocion" },
    { id: "BIOE101", nombre: "Bioestadística para la Investigación", prerequisitos: [], semestre: 5, linea: "Investigacion" },
    { id: "PTA101", nombre: "Práctica de Técnicas Aplicadas en Matronería", prerequisitos: [], semestre: 5, linea: "Practica" },

    // Tercer año - VI semestre
    { id: "GER101", nombre: "Gerontología de la Mujer", prerequisitos: [], semestre: 6, linea: "Gestion" },
    { id: "GIN103", nombre: "Ginecología Patológica y Oncología", prerequisitos: ["GIN102"], semestre: 6, linea: "Gestion" },
    { id: "PIG101", nombre: "Práctica Integrada de Ginecología y Obstetricia", prerequisitos: ["OBS103", "GIN103"], semestre: 6, linea: "Practica" },
    { id: "NEO102", nombre: "Neonatología Patológica", prerequisitos: ["NEO101"], semestre: 6, linea: "Gestion" },
    { id: "SSR102", nombre: "Salud Sexual y Reproductiva con Enfoque de Género II", prerequisitos: ["SSR101"], semestre: 6, linea: "Promocion" },
    { id: "MET101", nombre: "Metodología de la Investigación", prerequisitos: ["BIOE101"], semestre: 6, linea: "Investigacion" },
    { id: "OPT101", nombre: "Optativo de Profesionalización I", prerequisitos: [], semestre: 6, linea: "Interdisciplinar" },

    // Séptimo semestre - VII semestre
    { id: "GES101", nombre: "Gestión y Liderazgo en Matronería", prerequisitos: [], semestre: 7, linea: "Gestion" },
    { id: "CLI101", nombre: "Climaterio y Bases para el Manejo de Piso Pélvico", prerequisitos: [], semestre: 7, linea: "Gestion" },
    { id: "PIM101", nombre: "Práctica Integrada de Matronería en APS y Comunidad", prerequisitos: ["PIG101"], semestre: 7, linea: "Practica" },
    { id: "PNE101", nombre: "Práctica de Neonatología y Puericultura", prerequisitos: ["NEO102"], semestre: 7, linea: "Practica" },
    { id: "SEX101", nombre: "Sexología Clínica", prerequisitos: [], semestre: 7, linea: "Promocion" },
    { id: "SEM101", nombre: "Seminario Grado I", prerequisitos: ["MET101"], semestre: 7, linea: "Investigacion" },
    { id: "OPT102", nombre: "Optativo de Profesionalización II", prerequisitos: ["OPT101"], semestre: 7, linea: "Interdisciplinar" },

    // Octavo semestre - VIII semestre
    { id: "ULS101", nombre: "Bases de Ultrasonografía en Obstetricia y Ginecología", prerequisitos: [], semestre: 8, linea: "Gestion" },
    { id: "PGE101", nombre: "Práctica Gineco-Obstetricia en Especialidades en Nivel Secundario", prerequisitos: ["PIM101"], semestre: 8, linea: "Practica" },
    { id: "POT101", nombre: "Práctica de Obstetricia en Nivel Terciario", prerequisitos: ["PIM101"], semestre: 8, linea: "Practica" },
    { id: "SSA101", nombre: "Práctica de Salud Sexual Ambulatoria", prerequisitos: ["PIM101"], semestre: 8, linea: "Practica" },
    { id: "SEM102", nombre: "Seminario Grado II", prerequisitos: ["SEM101"], semestre: 8, linea: "Investigacion" },
    { id: "OPT103", nombre: "Optativo de Profesionalización III", prerequisitos: ["OPT102"], semestre: 8, linea: "Interdisciplinar" },

    // Noveno semestre - IX semestre
    { id: "IHO101", nombre: "Internado Hospitalario Gineco-Obstétrico I", prerequisitos: [], semestre: 9, linea: "Practica" },
    { id: "IAS101", nombre: "Internado en APS I", prerequisitos: [], semestre: 9, linea: "Practica" },
    { id: "IEM101", nombre: "Internado Electivo de Matronería I", prerequisitos: [], semestre: 9, linea: "Practica" },

    // Décimo semestre - X semestre
    { id: "IHO102", nombre: "Internado Hospitalario Gineco-Obstétrico II", prerequisitos: ["IHO101"], semestre: 10, linea: "Practica" },
    { id: "IAS102", nombre: "Internado en APS II", prerequisitos: ["IAS101"], semestre: 10, linea: "Practica" },
    { id: "IEM102", nombre: "Internado Electivo de Matronería II", prerequisitos: ["IEM101"], semestre: 10, linea: "Practica" },
  ];

  // Referencia al contenedor principal
  const contenedoresSemestres = {};
  for (let i = 1; i <= 10; i++) {
    contenedoresSemestres[i] = document.getElementById(`sem-${i}`);
  }

  // Crear elementos de curso en su semestre correspondiente
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso", `linea-${curso.linea}`);
    div.textContent = curso.nombre;
    div.dataset.id = curso.id;
    div.dataset.prerequisitos = curso.prerequisitos.join(",");
    div.dataset.aprobado = "false";
    div.classList.add("bloqueado");
    contenedoresSemestres[curso.semestre].appendChild(div);
  });

  // Función para actualizar qué cursos están desbloqueados según prerrequisitos
  function actualizarEstado() {
    document.querySelectorAll(".curso").forEach(div => {
      const prereqs = div.dataset.prerequisitos.split(",").filter(Boolean);
      const aprobados = prereqs.every(pr => {
        const el = document.querySelector(`[data-id="${pr}"]`);
        return el && el.classList.contains("aprobado");
      });
      if (prereqs.length === 0 || aprobados) {
        div.classList.remove("bloqueado");
      } else {
        div.classList.add("bloqueado");
        // También remover aprobado si está aprobado pero ya no cumple requisitos
        if (div.classList.contains("aprobado")) {
          div.classList.remove("aprobado");
          div.dataset.aprobado = "false";
        }
      }
    });
  }

  // Evento click para aprobar o desaprobar ramos si están desbloqueados
  document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    // ... (todo el array que ya escribiste, lo mantienes igual)
  ];

  const contenedoresSemestres = {};
  for (let i = 1; i <= 10; i++) {
    contenedoresSemestres[i] = document.getElementById(`sem-${i}`);
  }

  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso", `linea-${curso.linea}`);
    div.textContent = curso.nombre;
    div.dataset.id = curso.id;
    div.dataset.prerequisitos = curso.prerequisitos.join(",");
    div.dataset.aprobado = "false";
    div.classList.add("bloqueado");
    contenedoresSemestres[curso.semestre].appendChild(div);
  });

  function actualizarEstado() {
    document.querySelectorAll(".curso").forEach(div => {
      const prereqs = div.dataset.prerequisitos.split(",").filter(Boolean);
      const aprobados = prereqs.every(pr => {
        const el = document.querySelector(`[data-id="${pr}"]`);
        return el && el.classList.contains("aprobado");
      });
      if (prereqs.length === 0 || aprobados) {
        div.classList.remove("bloqueado");
      } else {
        div.classList.add("bloqueado");
        if (div.classList.contains("aprobado")) {
          div.classList.remove("aprobado");
          div.dataset.aprobado = "false";
        }
      }
    });
  }

  document.querySelector(".contenedor-semestres").addEventListener("click", (e) => {
    const curso = e.target;
    if (curso.classList.contains("curso") && !curso.classList.contains("bloqueado")) {
      curso.classList.toggle("aprobado");
      curso.dataset.aprobado = curso.classList.contains("aprobado") ? "true" : "false";
      actualizarEstado();
    }
  });

  actualizarEstado();
});
