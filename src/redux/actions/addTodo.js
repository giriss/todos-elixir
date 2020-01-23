export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const ADD_TODOS = 'ADD_TODOS';

export function addTodo(title, id) {
  return { type: ADD_TODO, payload: { title, id } };
}

export function addTodoAsync(title) {
  return { type: ADD_TODO_ASYNC, payload: title };
}

export function addTodos(items) {
  return { type: ADD_TODOS, payload: items };
}
