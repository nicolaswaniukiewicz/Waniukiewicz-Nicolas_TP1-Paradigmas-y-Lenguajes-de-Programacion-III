(function () {
  const form = document.querySelector('form'); 
  const toast = document.getElementById('toast');

  if (!form || !toast) return;

  function getNameOrEmail() {
    const u = getCurrentUser && getCurrentUser();
    if (!u) return '¡Hola!';
    return u.name?.trim() ? u.name.trim() : (u.email || '¡Hola!');
  }

  function getSelectedItems() {
    const checked = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));
    const items = checked.map(cb => {
      const name = cb.name.replace(/^prod_/, '');       // p.ej. "bandas"
      const qtyInput = form.querySelector(`[name="cant_${name}"]`);
      const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      const labelText = cb.closest('label')?.innerText?.trim() || name;
      return { key: name, qty, label: labelText };
    });
    return items;
  }

  function showToast(html, timeout = 3500) {
    toast.innerHTML = html;
    toast.classList.add('toast--show');
    setTimeout(() => {
      toast.classList.remove('toast--show');
    }, timeout);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const items = getSelectedItems();
    if (!items.length) {
      alert('Seleccioná al menos un producto para continuar.');
      return;
    }

    const maxShow = 3;
    const listShort = items
      .slice(0, maxShow)
      .map(it => `${it.qty}× ${it.label.split('—')[0].trim()}`)
      .join(' • ');

    const extra = items.length > maxShow ? ` +${items.length - maxShow} ítems` : '';
    const who = getNameOrEmail();

    showToast(
      `
      <div class="toast__title">¡Compra realizada con éxito!</div>
      <div class="toast__desc">
        ${who}, confirmamos tu pedido:
        <br><strong>${listShort}${extra}</strong>
        <br>Te enviaremos el detalle a tu correo registrado.
      </div>
      <span class="toast__ok">✔ Listo</span>
      `,
      4200
    );

    setTimeout(() => {
      form.reset();
    }, 4500);
  });
})();
