const carlos_api = "http://localhost:5530/api/ventas";

function guardar() {
    const informacion = {
        NombreCompleto:  nombres.value,
        Email: emaill.value,
        Direccion:  direcion.value,
        Ciudad: ciuda.value,
        Estado:  estadu.value,
        CodigoPostal:  postai.value,
        TitularDeLaTarjeta: titular_tarjeta.value,
        NumeroDeTarjeta:  numero_tarjeta.value,
        Departamento:  departaments.value,
        Vencimiento:  vencim.value,
        CVV: codigo_12.value
    };

    axios.post(carlos_api, informacion, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        console.log('Datos guardados con éxito:', response.data);
        alert('Datos de tarjeta de crédito guardados con éxito');

        window.location.href = "index.html";
    })
    .catch(function (error) {
        console.error('Error al guardar los datos:', error);
        alert('Error al guardar los datos de tarjeta de crédito');
    });
}


