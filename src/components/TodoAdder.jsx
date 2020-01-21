import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoAdder({ onAdd }) {
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
      <input ref={input} placeholder="New todo" />
      <button type="submit">Add</button>
    </form>
  );
}

TodoAdder.propTypes = {
  onAdd: PropTypes.func,
};

TodoAdder.defaultProps = {
  onAdd() {},
};

export default TodoAdder;
