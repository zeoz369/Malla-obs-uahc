document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".curso");

  // Al iniciar, sólo deshabilitamos los que tienen prerequisitos
  botones.forEach(btn => {
    const prereqs = btn.dataset.prerequisitos.split(",").filter(p => p);
    if (prereqs.length > 0) {
      btn.classList.add("bloqueado");
    }
  });

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("bloqueado")) return;
      btn.classList.add("aprobado");
      btn.classList.remove("bloqueado");

      // Revisar si con esta aprobación se desbloquean otros
      botones.forEach(b => {
        if (b.classList.contains("aprobado")) return;
        const pre = b.dataset.prerequisitos.split(",").filter(p => p);
        const aprobados = pre.every(id => {
          const target = document.querySelector(`.curso[data-id="${id}"]`);
          return target && target.classList.contains("aprobado");
        });
        if (aprobados) {
          b.classList.remove("bloqueado");
        }
      });
    });
  });
});
