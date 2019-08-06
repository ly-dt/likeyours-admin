import axios from 'axios';
import { BASE_URL } from '..';

export default async function updateCategory(payload) {
  const { id, name } = payload;
  const response = await axios.put(`${BASE_URL}/categories/${id}`, {
    name,
  });
  return response;
}
