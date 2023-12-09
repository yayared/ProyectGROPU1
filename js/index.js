const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const sliderList = document.querySelector('.slider-frame ul');
let currentIndex = 0;
let autoSlideInterval; // Variable para almacenar el intervalo de cambio automático

// Función para avanzar al siguiente slide
function nextSlide() {
  if (currentIndex < sliderList.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volvemos al primer slide si estamos en el último
  }
  updateSlider();
}

// Agregamos un event listener para el botón "Anterior"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Agregamos un event listener para el botón "Siguiente"
nextButton.addEventListener('click', () => {
  nextSlide();
});

// Función para actualizar el slider
function updateSlider() {
  const itemWidth = 1301;
  const newPosition = -currentIndex * itemWidth;

  sliderList.style.transition = 'transform 0.5s ease-in-out';
  sliderList.style.transform = `translateX(${newPosition}px)`;
}

// Función para iniciar el cambio automático cada 5 segundos
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Cambia de slide cada 5 segundos (5000 milisegundos)
}

// Iniciar el cambio automático cuando se carga la página
startAutoSlide();

// Detener el cambio automático cuando se hace clic en los botones de navegación
prevButton.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Detenemos el intervalo
  startAutoSlide(); // Lo iniciamos nuevamente
});

nextButton.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Detenemos el intervalo
  startAutoSlide(); // Lo iniciamos nuevamente
});
