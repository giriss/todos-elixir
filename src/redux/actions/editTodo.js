export const EDIT_TODO = 'EDIT_TODO';

export function editTodo(id, changes) {
  return { type: EDIT_TODO, id, changes };
}
