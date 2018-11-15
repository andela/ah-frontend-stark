export default function toggleLoader(elementId, value = 'none') {
  const loader = document.getElementById(elementId);
  loader.style.display = value;
}

export function logOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location.replace('/');
}
