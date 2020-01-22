/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Todo from './Todo';

function TodoList({ todos, onEdit }) {
  return (
    <List relaxed="very" divided>
      {todos.map(({ id, title, completed }) => (
        <Todo
          {...{ title, completed }}
          key={id}
          onEdit={(changes) => { onEdit(id, changes); }}
        />
      ))}
    </List>
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
