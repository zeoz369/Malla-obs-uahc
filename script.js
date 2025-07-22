document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    { id: "BIO101", nombre: "Biología Celular", linea: "formacion", prereqs: [] },
    { id: "QUI102", nombre: "Química General", linea: "disciplinar", prereqs: [] },
    { id: "MAT103", nombre: "Matemáticas Básicas", linea: "formacion", prereqs: [] },
    { id: "FIS104", nombre: "Física General", linea: "formacion", prereqs: [] },
    { id: "PSI201", nombre: "Psicología General", linea: "sello", prereqs: ["BIO101"] },
    { id: "ANT202", nombre: "Antropología", linea: "sello", prereqs: ["BIO101"] },
    { id: "OBG301", nombre: "Obstetricia I", linea: "profesional", prereqs: ["BIO101", "QUI102"] },
    { id: "OBG302", nombre: "Obstetricia II", linea: "profesional", prereqs: ["OBG301"] },
    { id: "NUT401", nombre: "Nutrición", linea: "disciplinar", prereqs: ["BIO101"] },
    { id: "SAL501", nombre: "Salud Pública", linea: "profesional", prereqs: ["PSI201", "ANT202"] }
    // Agrega aquí los demás cursos reales si deseas
  ];

  const malla = document.getElementById("malla");

  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso", `color-${curso.linea}`);
    div.dataset.id = curso.id;
    div.dataset.prerequisitos = curso.prereqs.join(",");
    div.textContent = curso.nombre;
    malla.appendChild(div);
  });

  function actualizarCursos() {
    const botones = document.querySelectorAll(".curso");

    botones.forEach(btn => {
      const prereqs = btn.dataset.prerequisitos.split(",").filter(p => p);
      if (prereqs.length === 0) {
        btn.classList.remove("bloqueado");
      } else {
        const todosAprobados = prereqs.every(id => {
          const cursoReq = document.querySelector(`.curso[data-id="${id}"]`);
          return cursoReq && cursoReq.classList.contains("aprobado");
        });
        if (todosAprobados) {
          btn.classList.remove("bloqueado");
        } else {
          btn.classList.add("bloqueado");
          btn.classList.remove("aprobado");
        }
      }
    });
  }

  malla.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("curso")) return;
    if (target.classList.contains("bloqueado")) return;

    target.classList.toggle("aprobado");
    actualizarCursos();
  });

  actualizarCursos();
});
