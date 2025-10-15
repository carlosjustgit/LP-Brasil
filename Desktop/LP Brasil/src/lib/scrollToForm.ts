/**
 * Scrolls smoothly to the lead form section
 */
export function scrollToForm() {
  const formElement = document.getElementById('form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

