import { SET_LOADING } from '../actions/loading';

export default function loading(state = false, { type, payload }) {
  if (type === SET_LOADING) {
    return payload;
  }
  return state;
}
