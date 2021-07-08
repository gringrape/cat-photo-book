export default function Element(tag, attributes, ...children) {
  const element = document.createElement(tag);

  function render() {
    [...element.children].forEach((child) => {
      element.removeChild(child);
    });

    Object.entries(attributes).forEach(([property, value]) => {
      if (property.startsWith('on')) {
        element[property] = value;
        return;
      }
      element.setAttribute(property, value);
    });

    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
        return;
      }

      if (typeof child === 'function') {
        element.appendChild(child());
        return;
      }

      element.appendChild(child);
    });
  }

  render();

  // component 인 경우에만 event 처리 => container
  if (element.getAttribute('type') === 'container') {
    element.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        render();
      }
    });
  }

  return element;
}
