import {
  ADD_TODO, EDIT_TODO, ADD_TODOS, DELETE_TODO,
} from '../actions';

export default function todos(state = [], { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [...state, { id: payload.id, title: payload.title }];
    case EDIT_TODO: {
      const index = state.findIndex((item) => item.id === payload.id);
      const todoList = [...state];
      todoList[index] = { ...state[index], ...payload.changes };
      return todoList;
    }
    case ADD_TODOS:
      return [...payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return [...state];
  }
}
