import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders todos', () => {
  const { getByText } = render(<Todos items={[]} />);
  expect(getByText(/0 Todo/i)).toBeInTheDocument();
});
