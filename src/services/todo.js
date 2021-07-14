import Axios from 'axios';
import { API_ENDPOINT } from './consts';

export async function all() {
  return (await Axios.get(`${API_ENDPOINT}/todos`)).data.data;
}

export async function create(todo) {
  return (await Axios.post(`${API_ENDPOINT}/todos`, { todo })).data.data;
}

export async function update(id, changes) {
  return (await Axios.patch(`${API_ENDPOINT}/todos/${id}`, { todo: changes })).data.data;
}

export async function remove(id) {
  return (await Axios.delete(`${API_ENDPOINT}/todos/${id}`)).data;
}
