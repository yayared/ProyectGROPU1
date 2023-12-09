// Obtener los elementos del DOM
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const quantityElement = document.querySelector('.quantity');
const addToCartButton = document.querySelector('.addToCart');

// Inicializar la cantidad en 0
let quantity = 0;
quantityElement.textContent = quantity;

// Función para incrementar la cantidad
incrementButton.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
});

// Función para decrementar la cantidad (con un mínimo de 0)
decrementButton.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});

// Función para agregar al carrito
addToCartButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para agregar el artículo al carrito
    alert(`Se ha agregado ${quantity} artículo(s) al carrito.`);
});
