import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

function TodoAdder({ disabled, onAdd }) {
  const input = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onAdd(input.current.inputRef.current.value);
        input.current.inputRef.current.value = '';
      }}
    >
      <Input
        size="huge"
        ref={input}
        action={{ icon: 'add' }}
        placeholder="New todo"
        disabled={disabled}
      />
    </form>
  );
}

TodoAdder.propTypes = {
  disabled: PropTypes.bool,
  onAdd: PropTypes.func,
};

TodoAdder.defaultProps = {
  disabled: false,
  onAdd() {},
};

export default TodoAdder;
