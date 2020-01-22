import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import * as Todo from '../services/todo';
import {
  addTodo, EDIT_TODO_ASYNC, ADD_TODO_ASYNC, editTodo,
} from '../redux/actions';
import { setLoading } from '../redux/actions/loading';

function* apiAddTodo({ title }) {
  yield put(setLoading(true));
  const { id, _title } = yield call(Todo.create, { todo: { title } });
  yield put(addTodo(_title, id));
  yield put(setLoading(false));
}

function* apiEditTodo({ id, changes }) {
  yield put(setLoading(true));
  const { id: _id } = yield call(Todo.update, id, changes);
  yield put(editTodo(_id, changes));
  yield put(setLoading(false));
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
