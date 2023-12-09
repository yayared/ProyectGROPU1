// Obtén una referencia al botón "Ver más"
const verDetallesButton = document.querySelector('.ver-detalles');

// Obtén una referencia al elemento de detalles
const detalles = document.querySelector('.detalles');

// Agrega un controlador de eventos para el botón
verDetallesButton.addEventListener('click', function() {
    // Si los detalles están ocultos, muéstralos; de lo contrario, ocúltalos.
    if (detalles.style.display === 'none' || detalles.style.display === '') {
        detalles.style.display = 'block';
        verDetallesButton.textContent = 'Ver menos';
    } else {
        detalles.style.display = 'none';
        verDetallesButton.textContent = 'Ver más';
    }
});
