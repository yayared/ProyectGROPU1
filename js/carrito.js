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
                                 <p>Precio unitario: $${producto.costo.toFixed(2)}</p>
                                 <label for="cantidad-${producto.nombre}">Cantidad:</label>
                                 <input type="number" id="cantidad-${producto.nombre}" value="${producto.cantidad || 1}" min="1" max="10">
                                 <p>Precio total: $${(producto.costo * (producto.cantidad || 1)).toFixed(2)}</p>
                                 <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
                                 <button onclick="comprarProducto('${producto.nombre}', ${producto.costo}, ${producto.cantidad || 1})">Comprar</button>`;
        carritoContainer.appendChild(productoDiv);

        // Agregar evento para actualizar el precio total al cambiar la cantidad
        const cantidadInput = document.getElementById(`cantidad-${producto.nombre}`);
        cantidadInput.addEventListener("change", function () {
            actualizarPrecioTotal(producto, cantidadInput.value);
        });
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
function comprarProducto(nombreProducto, costoProducto, cantidad) {
    // Realizar cualquier acción necesaria al comprar un producto
    const mensajeCompra = `Producto comprado: ${nombreProducto} (Cantidad: ${cantidad}) con costo $${(costoProducto * cantidad).toFixed(2)}`;

    // Mostrar una alerta con la información del producto comprado
    alert(mensajeCompra);

    // Eliminar el producto del carrito después de comprarlo
    eliminarProducto(nombreProducto);
}

// Función para actualizar el precio total al cambiar la cantidad
function actualizarPrecioTotal(producto, nuevaCantidad) {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    // Encontrar el producto en el carrito y actualizar la cantidad
    const nuevoCarrito = carrito.map(p => {
        if (p.nombre === producto.nombre) {
            return { ...p, cantidad: parseInt(nuevaCantidad) };
        }
        return p;
    });

    sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    mostrarProductosEnCarrito();
}

// Función para comprar todos los productos en el carrito
function comprarTotal() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    // Calcular el precio total de la compra
    const precioTotal = carrito.reduce((total, producto) => total + producto.costo * (producto.cantidad || 1), 0);

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
