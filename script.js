document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo");

  botones.forEach(btn => {
    const prereqs = btn.dataset.prerequisitos.split(",").filter(p => p);

    if (prereqs.length > 0) {
      btn.disabled = true;
    }

    btn.addEventListener("click", () => {
      btn.classList.add("aprobado");
      btn.disabled = true;

      botones.forEach(b => {
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
