document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Por favor complete todos los campos');
    return;
  }

  const emailPattern = /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Por favor ingrese un correo válido');
    return;
  }

  const res = loginUser({ email, password });
  if (!res.ok) {
    alert(res.msg);
    return;
  }

  const params = new URLSearchParams(location.search);
  const next = params.get('next') || 'index.html';
  location.href = next;
});

(function autoSkipIfLogged() {
  if (isLoggedIn()) location.href = 'index.html';
})();
