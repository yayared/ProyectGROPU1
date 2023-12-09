
// Configuración de la URL de la API
const url_api = "http://localhost:5530/api/productos/nombre/";

// Función para buscar y mostrar detalles
function buscar() 
{
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
            mostrarDetalles(producto.nombre, producto.marca, producto.costo, producto.sku);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Función para mostrar detalles en la modal
function mostrarDetalles(nombre, marca, costo, sku) {
    // Actualiza dinámicamente el contenido de la modal con la información del producto seleccionado
    document.getElementById("modal-nombre").innerHTML = nombre;
    document.getElementById("descripcion-1").innerHTML = `
        <p>Marca: ${marca}</p>
        <p>Costo: ${costo}</p>
        <p>SKU: ${sku}</p>
    `;

    // Muestra la modal
    document.getElementById("btn-modal").checked = true;
}