import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Todo from '../services/todo';
import AllTodoList from '../containers/AllTodoList';
import SavedTodoAdder from '../containers/SavedTodoAdder';
import spinner from '../spinner.svg';

function Todos({ amount, loading, onFetch }) {
  useEffect(() => {
    if (loading) return;

    Todo.all().then((todos) => {
      const items = todos.map(({ id, title, completed }) => ({
        id, title, completed,
      }));
      onFetch(items);
    });
  });

  if (loading) {
    return <img src={spinner} alt="loading" height="100" />;
  }

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
  loading: PropTypes.bool,
  onFetch: PropTypes.func,
};

Todos.defaultProps = {
  loading: false,
  onFetch() {},
};

export default Todos;
