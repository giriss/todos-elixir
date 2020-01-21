import React from 'react';
import PropTypes from 'prop-types';

function Todo({ title, completed, onEdit }) {
  let textStyle;
  if (completed) {
    textStyle = { textDecoration: 'line-through' };
  } else {
    textStyle = {};
  }

  return (
    <li style={textStyle}>
      <span
        onClick={() => { onEdit({ completed: !completed }); }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onEdit({ completed: !completed });
          }
        }}
        role="button"
        tabIndex="0"
      >
        {title}
      </span>
    </li>
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
