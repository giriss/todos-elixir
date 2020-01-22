import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import * as Todo from '../services/todo';
import { addTodo } from '../redux/actions';

function* apiAddTodo({ title }) {
  const todo = yield call(Todo.create, { todo: { title } });
  yield put(addTodo(title, todo.id));
}

function* watchApiAddTodo() {
  yield takeLatest('ADD_TODO_ASYNC', apiAddTodo);
}

export default function* rootSaga() {
  yield all([
    watchApiAddTodo(),
  ]);
}
