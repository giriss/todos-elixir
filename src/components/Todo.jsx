import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

function Todo({ title, completed, onEdit }) {
  let textStyle;
  if (completed) {
    textStyle = { textDecoration: 'line-through' };
  } else {
    textStyle = {};
  }

  return (
    <Menu.Item
      onClick={() => { onEdit({ completed: !completed }); }}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onEdit({ completed: !completed });
        }
      }}
    >
      <span style={textStyle}>{title}</span>
    </Menu.Item>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onEdit: PropTypes.func,
};

Todo.defaultProps = {
  onEdit() {},
  completed: false,
};

export default Todo;
