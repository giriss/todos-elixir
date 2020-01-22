/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todos, onEdit }) {
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <Todo
          {...{ title, completed }}
          key={id}
          onEdit={(changes) => { onEdit(id, changes); }}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  })).isRequired,
  onEdit: PropTypes.func,
};

TodoList.defaultProps = {
  onEdit() {},
};

export default TodoList;
