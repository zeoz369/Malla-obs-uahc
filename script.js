document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    // SEMESTRE 1
    { id: "BIO101", nombre: "Biología Celular", semestre: 1, linea: "BaseCientifica", prerequisitos: [] },
    { id: "QUIM101", nombre: "Química General", semestre: 1, linea: "BaseCientifica", prerequisitos: [] },
    { id: "SALUD101", nombre: "Introducción a la Salud Pública", semestre: 1, linea: "General", prerequisitos: [] },
    { id: "COM101", nombre: "Comunicación y Lenguaje Académico", semestre: 1, linea: "General", prerequisitos: [] },
    { id: "ANAT101", nombre: "Anatomía", semestre: 1, linea: "BaseCientifica", prerequisitos: [] },
    { id: "PSICO101", nombre: "Psicología Evolutiva", semestre: 1, linea: "General", prerequisitos: [] },

    // SEMESTRE 2
    { id: "FISIO101", nombre: "Fisiología", semestre: 2, linea: "BaseCientifica", prerequisitos: ["BIO101", "ANAT101"] },
    { id: "BIOQ101", nombre: "Bioquímica", semestre: 2, linea: "BaseCientifica", prerequisitos: ["QUIM101"] },
    { id: "SOCIO101", nombre: "Sociología de la Salud", semestre: 2, linea: "General", prerequisitos: [] },
    { id: "ANT101", nombre: "Antropología", semestre: 2, linea: "General", prerequisitos: [] },
    { id: "MORFO101", nombre: "Morfología", semestre: 2, linea: "BaseCientifica", prerequisitos: ["ANAT101"] },

    // SEMESTRE 3
    { id: "MICRO101", nombre: "Microbiología y Parasitología", semestre: 3, linea: "BaseCientifica", prerequisitos: ["BIOQ101"] },
    { id: "ETICA101", nombre: "Ética y Legislación", semestre: 3, linea: "General", prerequisitos: [] },
    { id: "OBST101", nombre: "Fundamentos del Cuidado Obstétrico", semestre: 3, linea: "Disciplinar", prerequisitos: ["FISIO101"] },
    { id: "CITOHIS101", nombre: "Citología e Histología", semestre: 3, linea: "BaseCientifica", prerequisitos: ["MORFO101"] },
    { id: "PSICOSOC101", nombre: "Psicosociología del Ciclo Vital", semestre: 3, linea: "General", prerequisitos: ["PSICO101", "SOCIO101"] },

    // SEMESTRE 4
    { id: "ENF101", nombre: "Fundamentos de Enfermería", semestre: 4, linea: "Interdisciplinar", prerequisitos: ["OBST101"] },
    { id: "DERMA101", nombre: "Dermatología", semestre: 4, linea: "Interdisciplinar", prerequisitos: [] },
    { id: "FARMA101", nombre: "Farmacología", semestre: 4, linea: "BaseCientifica", prerequisitos: ["BIOQ101", "FISIO101"] },
    { id: "METINV101", nombre: "Metodología de la Investigación I", semestre: 4, linea: "Investigacion", prerequisitos: [] },
    { id: "EDUSEX101", nombre: "Educación para la Sexualidad", semestre: 4, linea: "Promocion", prerequisitos: ["ANT101"] },

    // SEMESTRE 5
    { id: "OBST201", nombre: "Obstetricia I", semestre: 5, linea: "Disciplinar", prerequisitos: ["OBST101"] },
    { id: "GINE201", nombre: "Ginecología I", semestre: 5, linea: "Disciplinar", prerequisitos: ["OBST101"] },
    { id: "NEO201", nombre: "Neonatología I", semestre: 5, linea: "Disciplinar", prerequisitos: ["FISIO101", "MICRO101"] },
    { id: "PSICOPER201", nombre: "Psicoprofilaxis", semestre: 5, linea: "Promocion", prerequisitos: ["PSICOSOC101"] },
    { id: "INTEG201", nombre: "Integración Disciplinar I", semestre: 5, linea: "Disciplinar", prerequisitos: ["OBST201", "GINE201"] },

    // SEMESTRE 6
    { id: "OBST202", nombre: "Obstetricia II", semestre: 6, linea: "Disciplinar", prerequisitos: ["OBST201"] },
    { id: "GINE202", nombre: "Ginecología II", semestre: 6, linea: "Disciplinar", prerequisitos: ["GINE201"] },
    { id: "NEO202", nombre: "Neonatología II", semestre: 6, linea: "Disciplinar", prerequisitos: ["NEO201"] },
    { id: "EDUPARTO202", nombre: "Educación en el Parto", semestre: 6, linea: "Promocion", prerequisitos: ["PSICOPER201"] },
    { id: "METINV202", nombre: "Metodología de la Investigación II", semestre: 6, linea: "Investigacion", prerequisitos: ["METINV101"] },
    { id: "INTEG202", nombre: "Integración Disciplinar II", semestre: 6, linea: "Disciplinar", prerequisitos: ["OBST202", "GINE202", "NEO202"] },

    // SEMESTRE 7
    { id: "OBST301", nombre: "Obstetricia III", semestre: 7, linea: "Disciplinar", prerequisitos: ["OBST202"] },
    { id: "GINE301", nombre: "Ginecología III", semestre: 7, linea: "Disciplinar", prerequisitos: ["GINE202"] },
    { id: "NEO301", nombre: "Neonatología III", semestre: 7, linea: "Disciplinar", prerequisitos: ["NEO202"] },
    { id: "GEST301", nombre: "Gestión en Salud Sexual y Reproductiva", semestre: 7, linea: "Gestion", prerequisitos: [] },
    { id: "INTEG301", nombre: "Integración Disciplinar III", semestre: 7, linea: "Disciplinar", prerequisitos: ["OBST301", "GINE301", "NEO301"] },

    // SEMESTRE 8
    { id: "APS401", nombre: "Atención Primaria en Salud", semestre: 8, linea: "General", prerequisitos: ["GEST301"] },
    { id: "SALUDPUB401", nombre: "Salud Pública Sexual y Reproductiva", semestre: 8, linea: "Promocion", prerequisitos: ["SALUD101"] },
    { id: "INV401", nombre: "Investigación en Obstetricia", semestre: 8, linea: "Investigacion", prerequisitos: ["METINV202"] },
    { id: "EPI401", nombre: "Epidemiología", semestre: 8, linea: "BaseCientifica", prerequisitos: [] },
    { id: "PRAC401", nombre: "Práctica Integrada I", semestre: 8, linea: "Practica", prerequisitos: ["INTEG301"] },

    // SEMESTRE 9
    { id: "PRAC402", nombre: "Práctica Integrada II", semestre: 9, linea: "Practica", prerequisitos: ["PRAC401"] },
    { id: "TALLERBIOET", nombre: "Taller de Bioética", semestre: 9, linea: "General", prerequisitos: [] },
    { id: "INV402", nombre: "Investigación Aplicada", semestre: 9, linea: "Investigacion", prerequisitos: ["INV401"] },

    // SEMESTRE 10
    { id: "PRACFIN", nombre: "Práctica Profesional Integrada", semestre: 10, linea: "Practica", prerequisitos: ["INV402", "PRAC402"] }
  ];

  const cursoPorId = {};
  cursos.forEach(curso => cursoPorId[curso.id] = curso);

  const crearCursoElemento = curso => {
    const div = document.createElement("div");
    div.className = `curso bloqueado linea-${curso.linea}`;
    div.textContent = curso.nombre;

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;
      div.classList.toggle("aprobado");
      actualizarEstadoCursos();
    });

    return div;
  };

  const actualizarEstadoCursos = () => {
    cursos.forEach(curso => {
      const elem = document.getElementById(curso.id);
      if (!elem) return;

      const aprobados = curso.prerequisitos.every(pr => {
        const prElem = document.getElementById(pr);
        return prElem && prElem.classList.contains("aprobado");
      });

      if (aprobados || curso.prerequisitos.length === 0) {
        elem.classList.remove("bloqueado");
      } else {
        elem.classList.add("bloqueado");
      }
    });
  };

  cursos.forEach(curso => {
    const columna = document.getElementById(`sem-${curso.semestre}`);
    if (columna) {
      const div = crearCursoElemento(curso);
      div.id = curso.id;
      columna.appendChild(div);
    }
  });

  actualizarEstadoCursos();
});
