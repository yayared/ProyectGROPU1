function registrarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;

    axios.post('http://localhost:5530/api/registro', {
    NombreCompleto: nombre,
    Nombreusuario: usuario,
    contraseña: contraseña,
    direccion: direccion,
    telefono: telefono,
    fecha: fecha
    })
    .then(response => {
    console.log(response.data);
    alert('¡Registro exitoso!');
    window.location.href = 'login.html';
    })
    .catch(error => {
    console.error(error);
    alert('Error durante el registro. Por favor, inténtelo de nuevo.');
    });
}