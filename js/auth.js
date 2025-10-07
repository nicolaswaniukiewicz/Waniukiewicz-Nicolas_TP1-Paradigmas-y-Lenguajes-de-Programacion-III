const LS_KEYS = {
  USERS: 'fitstore_users',    
  SESSION: 'fitstore_session', 
};

function getUsers() {
  try { return JSON.parse(localStorage.getItem(LS_KEYS.USERS)) || []; }
  catch { return []; }
}
function setUsers(list) {
  localStorage.setItem(LS_KEYS.USERS, JSON.stringify(list));
}

function setSession(email) {
  localStorage.setItem(LS_KEYS.SESSION, JSON.stringify({ email, ts: Date.now() }));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(LS_KEYS.SESSION)) || null; }
  catch { return null; }
}
function clearSession() {
  localStorage.removeItem(LS_KEYS.SESSION);
}

function findUserByEmail(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

function registerUser({ name, email, password }) {
  const users = getUsers();
  if (findUserByEmail(email)) {
    return { ok: false, msg: 'El correo ya está registrado.' };
  }
  users.push({ name, email, password }); 
  setUsers(users);
  return { ok: true };
}

function loginUser({ email, password }) {
  const u = findUserByEmail(email);
  if (!u) return { ok: false, msg: 'Usuario no encontrado.' };
  if (u.password !== password) return { ok: false, msg: 'Contraseña incorrecta.' };
  setSession(u.email);
  return { ok: true, user: u };
}

function isLoggedIn() {
  return !!getSession();
}

function requireAuth() {
  if (!isLoggedIn()) {
    const here = encodeURIComponent(location.pathname + location.search);
    location.href = `login.html?next=${here}`;
  }
}

function getCurrentUser() {
  const s = getSession();
  if (!s) return null;
  return findUserByEmail(s.email) || null;
}

function logoutAndGoHome() {
  clearSession();
  location.href = 'login.html';
}
