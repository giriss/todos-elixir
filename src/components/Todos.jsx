import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';
import { all } from '../services/todo';

function Todos({
  items, onAdd, onEdit, onTodos,
}) {
  useEffect(() => {
    all().then((todos) => { onTodos(todos); });
  });

  return (
    <>
      <h1>
        {`${items.length} `}
        Todo
        {items.length > 1 ? 's' : ''}
      </h1>
      <TodoList todos={items} onEdit={onEdit} />
      <TodoAdder onAdd={onAdd} />
    </>
  );
}

Todos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onTodos: PropTypes.func,
};

Todos.defaultProps = {
  onAdd() {},
  onEdit() {},
  onTodos() {},
};

export default Todos;
