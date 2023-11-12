// Almaceno contenido de formulario en la variable contactForm.
const contactForm = document.getElementById('contactForm');

// Agrego un oyente de eventos al formulario.
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Formulario enviado!');
});