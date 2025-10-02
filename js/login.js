document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que el formulario se envíe de inmediato

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (!email || !password) {
        alert('Por favor complete todos los campos');
        return;
    }

    // Validación del formato del correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingrese un correo válido');
        return;
    }

    // Si todo es correcto, procedemos a "loguear"
    alert('Iniciando sesión...');
    // Aquí podríamos redirigir al usuario a la página principal o mostrar un mensaje de éxito
});
