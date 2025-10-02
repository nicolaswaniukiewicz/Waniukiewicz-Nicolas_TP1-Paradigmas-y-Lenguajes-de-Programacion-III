(function(){
  const body = document.body;
  const btn = document.getElementById('modo-toggle');

  if(!btn) return;

  const preferSaved = localStorage.getItem('modo'); 
  const preferSystemLight = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

  if(preferSaved === 'light' || (!preferSaved && preferSystemLight)){
    body.classList.add('light-mode');
  }

  function syncButton(){
    const light = body.classList.contains('light-mode');
    btn.setAttribute('aria-pressed', light ? 'true' : 'false');
    btn.title = light ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
  }
  syncButton();

  btn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const light = body.classList.contains('light-mode');
    localStorage.setItem('modo', light ? 'light' : 'dark');
    syncButton();
  });
})();

