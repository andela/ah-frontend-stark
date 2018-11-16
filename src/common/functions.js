export default function toggleLoader(elementId, value = 'none') {
  const loader = document.getElementById(elementId);
  loader.style.display = value;
}
