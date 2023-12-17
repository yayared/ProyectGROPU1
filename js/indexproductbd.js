// Configuración de la URL de la API
const url_api = "http://localhost:5530/api/productos/";

// Función para obtener y mostrar detalles del producto
function obtenerDetallesProducto() {
    // Obtener el ID del producto desde los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    // Construir la URL completa para la solicitud
    const url_producto = ${url_api}${idProducto};
    console.log("URL del producto:", url_producto); // Agrega esta línea

    // Realizar una solicitud GET a la API utilizando Axios
    axios.get(url_producto)
        .then(function (response) {
            if (!response.data || response.data.alerta) {
                console.log("Producto no encontrado");
                
                return;
            }

            // Obtener los detalles del producto
            const producto = response.data;

            // Llenar los elementos HTML con los detalles del producto
            document.getElementById("nombre").innerText = producto.nombre;
            document.getElementById("main-img").src = producto.imagen;
            document.getElementById("descripcion").innerText = producto.descripcion;
            document.getElementById("precio").innerText = $${producto.costo.toFixed(2)};
            document.getElementById("d11").innerText = Tamaño: ${producto.tamaño};
            document.getElementById("d22").innerText = Ubicación: ${producto.ubicacion};
            document.getElementById("d33").innerText = Batería: ${producto.bateria};
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Llamar a la función para obtener detalles cuando la página cargue
window.onload = obtenerDetallesProducto;