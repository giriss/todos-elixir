import React from 'react';
import { render, act } from '@testing-library/react';
import TodoAdder from './TodoAdder';

describe('TodoAdder', () => {
  it('calls onAdd with correct value', () => {
    const onAdd = jest.fn();
    act(() => {
      render(<TodoAdder onAdd={onAdd} />);
      document.querySelector('input').value = 'Todo 1';
      document.querySelector('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onAdd).toHaveBeenNthCalledWith(1, 'Todo 1');
  });
});
