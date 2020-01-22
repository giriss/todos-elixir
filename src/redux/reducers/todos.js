import { ADD_TODO, EDIT_TODO, ADD_TODOS } from '../actions';

export default function todos(state = [], {
  id, type, title, changes, items,
}) {
  switch (type) {
    case ADD_TODO:
      return [...state, { id, title }];
    case EDIT_TODO: {
      const index = state.findIndex((item) => item.id === id);
      const todoList = [...state];
      todoList[index] = { ...state[index], ...changes };
      return todoList;
    }
    case ADD_TODOS:
      return [...items];
    default:
      return [...state];
  }
}
