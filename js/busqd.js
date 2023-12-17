//busqd.js

// Configuración de la URL de la API
const url_api = "http://localhost:5530/api/productos/nombre/";

// Función para buscar y mostrar detalles
function buscar() {
    // Obtiene el nombre del producto ingresado por el usuario
    const nombre = document.getElementById("nombre_buscar").value;
    // Construye la URL completa para la búsqueda
    const url_busqueda = `${url_api}${nombre}`;

    // Realiza una solicitud GET a la API utilizando Axios
    axios.get(url_busqueda)
        .then(function (response) {
            if (!response.data || response.data.alerta || response.data.length === 0) {
                console.log("Producto no encontrado");
                // Puedes mostrar un mensaje de error o realizar alguna otra acción si no se encuentra el producto
                return; 
            }

            // Obtiene el primer producto (asume que solo mostrarás detalles para el primer resultado)
            const producto = response.data[0];

            // Muestra directamente los detalles en la modal
            mostrarDetalles(producto);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para mostrar detalles en la modal
function mostrarDetalles(producto) {
    // Actualiza dinámicamente el contenido de la modal con la información del producto seleccionado
    document.getElementById("modal-nombre").innerHTML = producto.nombre;
    document.getElementById("modal-marca").innerHTML = `Marca: ${producto.marca}`;
    document.getElementById("modal-costo").innerHTML = `Costo: ${producto.costo}`;
    document.getElementById("modal-sku").innerHTML = `SKU: ${producto.sku}`;
    document.getElementById("modal-imagen").src = producto.imagen;  // Asigna la URL de la imagen al atributo src

    // Muestra la modal
    document.getElementById("btn-modal").checked = true;
    
    // Agrega el enlace para ver detalles en otra página
    const verDetallesBtn = document.getElementById("ver-detalles-btn");
    verDetallesBtn.href = `indexproduct.html?id=${producto._id}`;
}

// ... el resto de tu código JavaScript ...
