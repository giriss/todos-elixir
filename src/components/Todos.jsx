import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Todo from '../services/todo';
import AllTodoList from '../containers/AllTodoList';
import SavedTodoAdder from '../containers/SavedTodoAdder';

function Todos({ amount, onFetch }) {
  useEffect(() => {
    Todo.all().then((todos) => {
      const items = todos.map(({ id, title, completed }) => ({
        id, title, completed,
      }));
      onFetch(items);
    });
  });

  return (
    <>
      <h1>
        {`${amount} `}
        Todo
        {amount > 1 ? 's' : ''}
      </h1>
      <AllTodoList />
      <SavedTodoAdder />
    </>
  );
}

Todos.propTypes = {
  amount: PropTypes.number.isRequired,
  onFetch: PropTypes.func,
};

Todos.defaultProps = {
  onFetch() {},
};

export default Todos;
