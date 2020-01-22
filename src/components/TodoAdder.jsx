import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoAdder({ disabled, onAdd }) {
  const input = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onAdd(input.current.value);
        input.current.value = '';
      }}
    >
      <input disabled={disabled} ref={input} placeholder="New todo" />
      <button disabled={disabled} type="submit">Add</button>
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
