export default function writeText(element) {
  if (!element) return;
  element.textContent = "Hello from an imported function.";
}
