// Almaceno contenedor carousel en la variable carouselContainer.
const carouselContainer = document.querySelector('.carousel');

// Almaceno cada img dentro de una lista llamada carouselSlides.
const carouselSlides = document.querySelectorAll('.carousel-item');

// Inicializa una variable currentSlide que se utilizará para realizar un seguimiento de la diapositiva actual en el carrusel.
let currentSlide = 0;

// Define una función llamada showSlide que toma un índice de diapositiva y muestra la diapositiva correspondiente.
function showSlide(slideIndex) {
    // Oculta todas las diapositivas configurando su estilo de visualización en 'none'.
    carouselSlides.forEach(slide => slide.style.display = 'none');
    
    // Muestra la diapositiva específica configurando su estilo de visualización en 'block'.
    carouselSlides[slideIndex].style.display = 'block';
}

// Define una función llamada nextSlide que avanza a la siguiente diapositiva en el carrusel.
function nextSlide(slideIndex) {
    // Calcula el índice de la siguiente diapositiva utilizando la aritmética modular.
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    // Llama a la función showSlide para mostrar la nueva diapositiva.
    showSlide(currentSlide);
}

// Define una función llamada prevSlide que retrocede a la diapositiva anterior en el carrusel.
function prevSlide() {
    // Calcula el índice de la diapositiva anterior utilizando la aritmética modular.
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    // Llama a la función showSlide para mostrar la nueva diapositiva.
    showSlide(currentSlide);
}

// Muestra la primera diapositiva al cargar la página.
showSlide(currentSlide);


let startCarousel;
const timer = 3000;

// Función para que las imagenes del carousel se muevan de manera automática
function carouselAuto(){
    startCarousel = setInterval(nextSlide,timer);
}

carouselAuto();



// Selecciona el formulario con el ID 'contactForm' y lo almacena en la variable contactForm.
const contactForm = document.getElementById('contactForm');

// Agrega un oyente de eventos al formulario 'contactForm' para prevenir su envío predeterminado y mostrar una alerta.
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Formulario enviado!'); // Aquí puedes agregar tu lógica de envío de formulario.
});





