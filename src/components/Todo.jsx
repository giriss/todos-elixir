import React from 'react';
import PropTypes from 'prop-types';
import { List, Icon } from 'semantic-ui-react';

function Todo({
  title, completed, onEdit, onDelete,
}) {
  let textStyle;
  if (completed) {
    textStyle = { textDecoration: 'line-through' };
  } else {
    textStyle = {};
  }

  return (
    <List.Item
      as="a"
      onClick={() => { onEdit({ completed: !completed }); }}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onEdit({ completed: !completed });
        }
      }}
    >
      <List.Content floated="right">
        <Icon
          name="close"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </List.Content>
      <Icon name={`check circle${completed ? '' : ' outline'}`} />
      <List.Content>
        <List.Header style={textStyle}>{title}</List.Header>
      </List.Content>
    </List.Item>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

Todo.defaultProps = {
  onEdit() {},
  onDelete() {},
  completed: false,
};

export default Todo;
