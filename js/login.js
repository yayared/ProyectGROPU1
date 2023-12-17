async function validarCredenciales(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    try {
        // Realizar solicitud GET al servidor
        const response = await axios.get(`http://localhost:5530/api/registro?Nombreusuario=${usuario}&contraseña=${contraseña}`);
        const data = response.data;

        if (response.status === 200) {
            // Autenticación exitosa
            alert('Autenticación exitosa');
            // Redirigir al usuario a index.html
            window.location.href = 'index.html';
        } else {
            // Credenciales inválidas
            alert('Credenciales inválidas');
        }
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        alert('Error al validar las credenciales');
    }
}

// Agregar el evento de envío del formulario
const form = document.querySelector('form');
form.addEventListener('submit', validarCredenciales);