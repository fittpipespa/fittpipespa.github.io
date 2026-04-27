// FILTRO
function filtrar(tipo) {
  const productos = document.querySelectorAll('.producto');

  productos.forEach(p => {
    const mostrar = tipo === 'todos' || p.classList.contains(tipo);

    if (mostrar) {
      p.style.display = 'block';
      p.classList.add('mostrar');
      p.classList.remove('oculto');
    } else {
      p.classList.add('oculto');
      p.classList.remove('mostrar');

      setTimeout(() => {
        p.style.display = 'none';
      }, 250);
    }
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
document.querySelector(".buscador input").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const productos = document.querySelectorAll(".producto");

  productos.forEach(p => {
    const nombre = p.textContent.toLowerCase();
    p.style.display = nombre.includes(texto) ? "block" : "none";
  });
});
function contactar(producto) {
  const mensaje = `Hola, quiero cotizar: ${producto}`;
  const url = `https://wa.me/56948713517?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

function toggleFicha() {
  const ficha = document.getElementById("fichaContenido");
  ficha.style.display = ficha.style.display === "block" ? "none" : "block";
}
