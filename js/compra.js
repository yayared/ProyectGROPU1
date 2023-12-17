// Recuperar el total almacenado en localStorage
const totalCompra = localStorage.getItem("totalCompra");

// Elementos del formulario
const nombres = document.getElementById("nombreCompleto");
const emaill = document.getElementById("email");
const direcion = document.getElementById("direccion");
const ciuda = document.getElementById("ciudad");
const estadu = document.getElementById("estado");
const postai = document.getElementById("codigoPostal");
const titular_tarjeta = document.getElementById("titularTarjeta");
const numero_tarjeta = document.getElementById("numeroTarjeta");
const departaments = document.getElementById("departamento");
const vencim = document.getElementById("vencimiento");
const codigo_12 = document.getElementById("cvv");

// Evento para el envío del formulario
document.getElementById("formularioCompra").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener la información del formulario
    const informacion = {
        NombreCompleto: nombres.value,
        Email: emaill.value,
        Direccion: direcion.value,
        Ciudad: ciuda.value,
        Estado: estadu.value,
        CodigoPostal: postai.value,
        TitularDeLaTarjeta: titular_tarjeta.value,
        NumeroDeTarjeta: numero_tarjeta.value,
        Departamento: departaments.value,
        Vencimiento: vencim.value,
        CVV: codigo_12.value,
        Total: totalCompra
    };

    // Enviar la información al servidor mediante POST
    axios.post("http://localhost:5530/api/ventas", informacion)
        .then(function (response) {
            console.log('Datos guardados con éxito:', response.data);
            alert('Datos de tarjeta de crédito guardados con éxito');
        })
        .catch(function (error) {
            console.error('Error al guardar los datos:', error);
            alert('Error al guardar los datos de tarjeta de crédito');
        });
});
