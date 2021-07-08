import Element from './Element.js';

import Cats from './Cats.js';
import CatInput from './CatInput.js';

export default function App() {
  const cats = [
    '흰색 고양이',
    '까만 고양이',
    '삼색털 고양이',
  ];

  let input = '';

  const deleteCat = () => {
    cats.pop();
  };

  const addCat = () => {
    if (input) {
      cats.push(input);
    }
  };

  const changeName = (e) => {
    const { value } = e.target;

    input = value;
  };

  return Element(
    'div',
    { type: 'container' },
    Element('h1', {}, '고양이 종류'),
    Element(
      'button',
      { onclick: deleteCat },
      '삭제',
    ),
    Element(
      'button',
      { onclick: addCat },
      '추가',
    ),
    Cats({ cats }),
    CatInput({ name: input, onchange: changeName }),
  );
}
