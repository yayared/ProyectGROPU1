const carlos_api ="http://localhost:5530/api/productos/nombre/"

function guardar(){
    axios.post(carlos_api)
        .then(function (response) {
            
            console.log('Datos guardados con éxito:', response.data);
            alert('Datos de tarjeta de crédito guardados con éxito');
        })
        .catch(function (error) {
            
            console.error('Error al guardar los datos:', error);
            alert('Error al guardar los datos de tarjeta de crédito');
        });
  }
    







