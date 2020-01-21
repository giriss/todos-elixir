import React from 'react';
import { render, act } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  it('strikes out completed todo', () => {
    act(() => {
      render(<Todo title="First todo" completed />);
    });
    expect(document.querySelector('li').style.textDecoration).toBe('line-through');
  });

  it('does not strike out incompleted todo', () => {
    act(() => {
      render(<Todo title="Second todo" />);
    });
    expect(document.querySelector('li').style.textDecoration).toBeFalsy();
  });
});
