const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.opacity = (idx === i) ? '1' : '0';
  });
}

function autoScroll() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

// 👇 inicia mostrando la primera
showSlide(index);

// 👇 se mueve cada 2 segundos
setInterval(autoScroll, 2000);
