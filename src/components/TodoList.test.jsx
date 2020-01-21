import React from 'react';
import { render, act } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  let onToggle;

  beforeEach(() => {
    onToggle = jest.fn();
    act(() => {
      render(
        <TodoList
          todos={[{ title: 'One' }, { title: 'Two', completed: true }, { title: 'Three' }]}
          onToggle={onToggle}
        />,
      );
    });
  });

  it('has 3 items', () => {
    expect(document.querySelectorAll('li')).toHaveLength(3);
  });

  it('calls onToggle with the correct value', () => {
    act(() => {
      document.querySelector('li:nth-child(2) > span').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onToggle).toHaveBeenNthCalledWith(1, 'Two');
  });
});
