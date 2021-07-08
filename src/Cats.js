import Element from './Element.js';

export default function Cats({ cats }) {
  return () => Element(
    'ul',
    { type: 'component' },
    ...cats.map((name) => (
      Element('li', {}, name)
    )),
  );
}
