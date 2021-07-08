import { fireEvent, getByLabelText, getByText } from '@testing-library/dom';

import App from './App.js';

describe('App', () => {
  it('renders title', () => {
    const container = App();

    expect(container).toHaveTextContent('고양이 종류');
  });

  it('renders types of cats', () => {
    const container = App();

    expect(container).toHaveTextContent('흰색 고양이');
    expect(container).toHaveTextContent('삼색털 고양이');
  });

  it('delete cat', () => {
    const container = App();

    expect(container).toHaveTextContent('삼색털 고양이');

    fireEvent.click(getByText(container, '삭제'));

    expect(container).not.toHaveTextContent('삼색털 고양이');
  });

  it('add cat', () => {
    const container = App();

    expect(container).not.toHaveTextContent('노란 고양이');

    fireEvent.change(getByLabelText(container, '입력'), {
      target: {
        value: '노란 고양이',
      },
    });
    fireEvent.click(getByText(container, '추가'));

    expect(container).toHaveTextContent('노란 고양이');
  });
});
