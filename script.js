const carrusel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.slide');
let index = 0;

function autoScroll() {
  index++;
  if (index >= slides.length) index = 0;
  carrusel.scrollTo({
    left: index * carrusel.offsetWidth,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 3000);
