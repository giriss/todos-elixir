import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import * as Todo from '../services/todo';
import {
  addTodo, EDIT_TODO_ASYNC, ADD_TODO_ASYNC, editTodo,
} from '../redux/actions';

function* apiAddTodo({ title }) {
  const { id, _title } = yield call(Todo.create, { todo: { title } });
  yield put(addTodo(_title, id));
}

function* apiEditTodo({ id, changes }) {
  const { id: _id } = yield call(Todo.update, id, changes);
  yield put(editTodo(_id, changes));
}

function* watchApiAddTodo() {
  yield takeEvery(ADD_TODO_ASYNC, apiAddTodo);
}

function* watchApiEditTodo() {
  yield takeEvery(EDIT_TODO_ASYNC, apiEditTodo);
}

export default function* rootSaga() {
  yield all([
    watchApiAddTodo(),
    watchApiEditTodo(),
  ]);
}
