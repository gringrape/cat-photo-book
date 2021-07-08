import Element from './Element.js';

export default function CatInput({ name, onchange }) {
  return () => Element(
    'div', {},
    Element(
      'label',
      { for: 'cat-input' },
      '입력',
    ),
    Element(
      'input',
      {
        id: 'cat-input',
        onchange,
        value: name,
      },
    ),
  );
}
