// FILTRO
const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

botones.forEach(btn => {
  btn.addEventListener("click", () => {

    botones.forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    const filtro = btn.textContent.toLowerCase();

    productos.forEach(p => {
      const cat = p.dataset.categoria;

      if (filtro === "todos" || cat === filtro) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });

  });
});
// ANIMACIÓN SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.producto');

  elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    observer.observe(el);
  });
});
