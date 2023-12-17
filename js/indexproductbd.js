// indexproductbd.js

const url_api = "http://localhost:5530/api/productos/";

function obtenerDetallesProducto() {
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    const url_producto = `${url_api}${idProducto}`;

    axios.get(url_producto)
        .then(function (response) {
            if (!response.data || response.data.alerta) {
                console.log("Producto no encontrado");
                return;
            }

            const producto = response.data;

            document.getElementById("nombre").innerText = producto.nombre;
            document.getElementById("main-img").src = producto.imagen;
            document.getElementById("descripcion").innerText = producto.descripcion;
            document.getElementById("precio").innerText = `$${producto.costo.toFixed(2)}`;
            document.getElementById("d11").innerText = `Tamaño: ${producto.tamaño}`;
            document.getElementById("d22").innerText = `Ubicación: ${producto.ubicacion}`;
            document.getElementById("d33").innerText = `Batería: ${producto.bateria}`;

            // Agregar un evento al botón "Agregar al carrito"
            const agregarCarritoBtn = document.getElementById("agregar-al-carrito-btn");
            agregarCarritoBtn.addEventListener("click", function () {
                agregarAlCarrito(producto);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function agregarAlCarrito(producto) {
    // Enviar el producto al carrito.html
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

window.onload = obtenerDetallesProducto;
