document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    { id: "MAT101", nombre: "Introducción a la Matronería y la Atención Humanizada", prerequisitos: [], semestre: 1, linea: "Gestion" },
    { id: "BIO101", nombre: "Anatomía general", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "BIO102", nombre: "Anatomía Específica Gineco-obtétrica y Neonatal", prerequisitos: ["BIO101"], semestre: 2, linea: "Gestion" },
    { id: "BIO201", nombre: "Biología Celular y Molecular", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "BIO202", nombre: "Microbiología Aplicada y Parasitología", prerequisitos: ["BIO201"], semestre: 2, linea: "BaseCientifica" },
    { id: "QUI101", nombre: "Química General", prerequisitos: [], semestre: 1, linea: "BaseCientifica" },
    { id: "QUI102", nombre: "Bioquímica", prerequisitos: ["QUI101"], semestre: 2, linea: "BaseCientifica" },
    { id: "ANT101", nombre: "Antropología de la Salud", prerequisitos: [], semestre: 1, linea: "Disciplinar" },
    { id: "ACA101", nombre: "Estrategias para la Vida Académica I", prerequisitos: [], semestre: 1, linea: "Basica" },
    { id: "ACA102", nombre: "Estrategias para la Vida Académica II", prerequisitos: ["ACA101"], semestre: 2, linea: "Basica" },
    { id: "PSI101", nombre: "Psicología General en el Curso de la Vida", prerequisitos: [], semestre: 2, linea: "Promocion" },
    { id: "EPI101", nombre: "Salud Pública y Epidemiología", prerequisitos: [], semestre: 2, linea: "Disciplinar" },
    { id: "ING101", nombre: "Inglés I", prerequisitos: [], semestre: 2, linea: "BaseCientifica" },
    { id: "ING102", nombre: "Inglés II", prerequisitos: ["ING101"], semestre: 3, linea: "BaseCientifica" },
    { id: "ING103", nombre: "Inglés III", prerequisitos: ["ING102"], semestre: 4, linea: "BaseCientifica" },
    // Continúa con todos los cursos restantes según el esquema del usuario...
  ];

  const contenedor = document.getElementById("malla");

  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso", `linea-${curso.linea}`);
    div.textContent = curso.nombre;
    div.dataset.id = curso.id;
    div.dataset.prerequisitos = curso.prerequisitos.join(",");
    div.dataset.aprobado = "false";
    div.classList.add("bloqueado");
    div.style.gridColumn = curso.semestre;
    contenedor.appendChild(div);
  });

  function actualizarEstado() {
    document.querySelectorAll(".curso").forEach(div => {
      const requisitos = div.dataset.prerequisitos.split(",").filter(Boolean);
      const aprobados = requisitos.every(req =>
        document.querySelector(`[data-id="${req}"]`)?.classList.contains("aprobado")
      );
      if (requisitos.length === 0 || aprobados) {
        div.classList.remove("bloqueado");
      }
    });
  }

  contenedor.addEventListener("click", e => {
    if (e.target.classList.contains("curso") && !e.target.classList.contains("bloqueado")) {
      e.target.classList.toggle("aprobado");
      actualizarEstado();
    }
  });

  actualizarEstado();
});
