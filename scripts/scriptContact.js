// Almaceno contenido de formulario en la variable contactForm.
const contactForm = document.getElementById('contactForm');

// Guardo valor seleccionado del combobox en variable opciones
let opciones = document.getElementById('opciones');

// Creo función para autocompletar el mensaje pasandole como variable la opción seleccionada.
function completarMensaje(){
    let selected = opciones.value;
    document.getElementById('mensaje').innerText = `Quiero más información acerca del taller/workshop de ${selected}.`;
}

// Agrego un oyente de eventos al formulario.
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Formulario enviado!');
});