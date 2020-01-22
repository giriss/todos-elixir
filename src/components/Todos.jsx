import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import nprogress from 'nprogress';
import * as Todo from '../services/todo';
import AllTodoList from '../containers/AllTodoList';
import SavedTodoAdder from '../containers/SavedTodoAdder';
import './Todos.sass';

function Todos({ amount, loading, onFetch }) {
  useEffect(() => {
    if (loading) return;

    nprogress.start();
    Todo.all().then((todos) => {
      const items = todos.map(({ id, title, completed }) => ({
        id, title, completed,
      }));
      items.sort(({ id: id1 }, { id: id2 }) => (id1 > id2 ? 1 : -1));
      onFetch(items);
      nprogress.done();
    });
  });

  if (loading) {
    nprogress.start();
  } else {
    nprogress.done();
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
