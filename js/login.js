document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();  

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor complete todos los campos');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingrese un correo válido');
        return;
    }

    alert('Iniciando sesión...');
});

