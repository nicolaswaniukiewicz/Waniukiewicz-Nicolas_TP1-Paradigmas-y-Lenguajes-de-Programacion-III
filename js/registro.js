document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que el formulario se envíe de inmediato

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validar que los campos no estén vacíos
    if (!name || !email || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Si todo es correcto, simular un registro exitoso
    alert('Cuenta creada con éxito!');
    // Aquí podríamos redirigir a la página de login o mostrar un mensaje de éxito
    // window.location.href = "login.html";  // Descomentar para redirigir al login
});
