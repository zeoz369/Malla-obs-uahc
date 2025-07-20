document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo");

  // Al iniciar, sólo deshabilitamos los que tienen prerequisitos
  botones.forEach(btn => {
    const prereqs = btn.dataset.prerequisitos.split(",").filter(p => p);
    if (prereqs.length > 0) {
      btn.disabled = true;
    }
  });

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return; // No hace nada si está deshabilitado
      btn.classList.add("aprobado");
      btn.disabled = true;

      // Revisar si con esta aprobación se desbloquean otros
      botones.forEach(b => {
        if (b.classList.contains("aprobado")) return; // ya aprobado
        const pre = b.dataset.prerequisitos.split(",").filter(p => p);
        const aprobados = pre.every(id => {
          const target = document.querySelector(`.ramo[data-id="${id}"]`);
          return target && target.classList.contains("aprobado");
        });
        if (aprobados) {
          b.disabled = false;
        }
      });
    });
  });
});
