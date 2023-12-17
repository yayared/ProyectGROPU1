// Configuración de la URL de la API
const url_api = "http://localhost:5530/api/productos/";

// Función para obtener y mostrar detalles del producto
function obtenerDetallesProducto() {
    // Obtener el ID del producto desde los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    // Construir la URL completa para la solicitud
    const url_producto = `${url_api}${idProducto}`;
    console.log("URL del producto:", url_producto);

    // Realizar una solicitud GET a la API utilizando Axios
    axios.get(url_producto)
        .then(function (response) {
            if (!response.data || response.data.alerta) {
                console.log("Producto no encontrado");
                // Puedes mostrar un mensaje de error o realizar alguna otra acción si no se encuentra el producto
                return;
            }

            // Obtener los detalles del producto
            const producto = response.data;

            // Llenar los elementos HTML con los detalles del producto
            document.getElementById("nombre").innerText = producto.nombre;
            document.getElementById("main-img").src = producto.imagen;
            document.getElementById("descripcion").innerText = producto.descripcion;
            document.getElementById("precio").innerText = `$${producto.costo.toFixed(2)}`;
            document.getElementById("d11").innerText = `Tamaño: ${producto.tamaño}`;
            document.getElementById("d22").innerText = `Ubicación: ${producto.ubicacion}`;
            document.getElementById("d33").innerText = `Batería: ${producto.bateria}`;
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para agregar el producto al carrito
function agregarAlCarrito() {
    // Obtener el ID del producto desde los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    // Realizar una solicitud GET a la API utilizando Axios para obtener la información del producto
    axios.get(`${url_api}${idProducto}`)
        .then(function (response) {
            if (!response.data || response.data.alerta) {
                console.log("Producto no encontrado");
                return;
            }

            const producto = response.data;

            // Agregar el producto al carrito
            agregarProductoAlCarrito(producto);

            // Puedes mostrar un mensaje de éxito o realizar alguna otra acción
            console.log("Producto agregado al carrito:", producto);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para agregar el producto al carrito (puedes personalizar esta función según tus necesidades)
function agregarProductoAlCarrito(producto) {
    // Ejemplo: Almacenar en localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ id: producto._id, nombre: producto.nombre, costo: producto.costo });
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Llamar a la función para obtener detalles cuando la página cargue
window.onload = obtenerDetallesProducto;
