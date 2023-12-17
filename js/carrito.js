// carrito.js

const carritoContainer = document.getElementById("carrito-container");
const comprarTotalButton = document.getElementById("comprar-total");

// Función para mostrar productos en el carrito
function mostrarProductosEnCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    carritoContainer.innerHTML = "";

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach(producto => {
        const productoDiv = document.createElement("div");

        const imagenSrc = producto.imagen || "";

        productoDiv.innerHTML = `<img src="${imagenSrc}" alt="${producto.nombre}">
                                 <p>${producto.nombre}</p>
                                 <p>Precio: $${producto.costo.toFixed(2)}</p>
                                 <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
                                 <button onclick="comprarProducto('${producto.nombre}', ${producto.costo})">Comprar</button>`;
        carritoContainer.appendChild(productoDiv);
    });
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombreProducto) {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    const nuevoCarrito = carrito.filter(producto => producto.nombre !== nombreProducto);
    
    sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    mostrarProductosEnCarrito();
}

// Función para comprar un producto individualmente
function comprarProducto(nombreProducto, costoProducto) {
    // Realizar cualquier acción necesaria al comprar un producto
    const mensajeCompra = `Producto comprado: ${nombreProducto} con costo $${costoProducto.toFixed(2)}`;
    
    // Mostrar una alerta con la información del producto comprado
    alert(mensajeCompra);

    // Eliminar el producto del carrito después de comprarlo
    eliminarProducto(nombreProducto);
}

// Función para comprar todos los productos en el carrito
function comprarTotal() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    
    // Calcular el precio total de la compra
    const precioTotal = carrito.reduce((total, producto) => total + producto.costo, 0);

    // Realizar cualquier acción necesaria al comprar todos los productos
    const mensajeCompraTotal = `Compra total realizada. Precio total: $${precioTotal.toFixed(2)}`;

    // Mostrar una alerta con el mensaje de compra total
    alert(mensajeCompraTotal);

    // Limpiar el carrito después de la compra total
    sessionStorage.removeItem("carrito");

    mostrarProductosEnCarrito();
}

// Mostrar productos en el carrito al cargar la página
window.onload = function () {
    mostrarProductosEnCarrito();
    comprarTotalButton.addEventListener("click", comprarTotal);
};
