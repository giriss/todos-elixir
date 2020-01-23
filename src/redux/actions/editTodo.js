export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_ASYNC = 'EDIT_TODO_ASYNC';

export function editTodo(id, changes) {
  return { type: EDIT_TODO, payload: { id, changes } };
}

export function editTodoAsync(id, changes) {
  return { type: EDIT_TODO_ASYNC, payload: { id, changes } };
}
