import axios from 'axios';
import { BASE_URL } from '..';

export default async function getSpecificCategory(id) {
  const response = await axios.get(`${BASE_URL}/categories/${id}`);
  return response;
}
