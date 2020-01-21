export const ADD_TODO = 'ADD_TODO';

export function addTodo(title, id) {
  return { type: ADD_TODO, title, id };
}
