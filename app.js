// FILTRO
function filtrar(tipo) {
  const productos = document.querySelectorAll('.producto');

  productos.forEach(p => {
    p.style.transform = "scale(0.8)";
    p.style.opacity = "0";

    setTimeout(() => {
      if (tipo === 'todos' || p.classList.contains(tipo)) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }

      setTimeout(() => {
        p.style.transform = "scale(1)";
        p.style.opacity = "1";
      }, 50);

    }, 200);
  });
}

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
