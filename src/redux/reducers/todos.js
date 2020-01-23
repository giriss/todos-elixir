import { ADD_TODO, EDIT_TODO, ADD_TODOS, DELETE_TODO } from '../actions';

export default function todos(state = [], {
  id, type, title, changes, items, payload,
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
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return [...state];
  }
}
