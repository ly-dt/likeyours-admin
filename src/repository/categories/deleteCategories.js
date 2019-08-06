import axios from 'axios';
import { BASE_URL } from '..';

export default async function deleteCategories(id) {
  const response = await axios.delete(`${BASE_URL}/categories/${id}`);
  return response;
}
