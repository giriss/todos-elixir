export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';

export function deleteTodo(id) {
  return { type: DELETE_TODO, payload: id };
}

export function deleteTodoAsync(id) {
  return { type: DELETE_TODO_ASYNC, payload: id };
}
