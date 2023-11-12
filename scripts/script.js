// Almaceno contenedor carousel en la variable carouselContainer.
const carouselContainer = document.querySelector('.carousel');

// Almaceno cada img dentro de una lista llamada carouselSlides.
const carouselSlides = document.querySelectorAll('.carousel-item');

// Inicializa variable currentSlide.
let currentSlide = 0;

// Función showSlide que toma un índice de diapositiva (slideIndex) y muestra la diapositiva correspondiente.
function showSlide(slideIndex) {
    // Para ocultar todas las diapositivas.
    carouselSlides.forEach(slide => slide.style.display = 'none');
    // Para mostrar la diapositiva específica.
    carouselSlides[slideIndex].style.display = 'block';
}

// Función nextSlide que avanza a la siguiente diapositiva.
function nextSlide(slideIndex) {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

// Muestra la primera diapositiva al cargar la página.
showSlide(currentSlide);

//Declaro variable startCarousel y timer.
let startCarousel;
const timer = 3000; //3000 es la cantidad de segundos transcurridos entre diapositivas.

// Función para que las imagenes del carousel se muevan de manera automática usando función nextSlide y variable timer.
function carouselAuto(){
    startCarousel = setInterval(nextSlide,timer);
}

// Llamo a la función para que las diapositivas se muestren automáticamente.
carouselAuto();
