import axios from 'axios';
import { BASE_URL } from '..';

export default async function createCategory({ name }) {
  const response = await axios.post(`${BASE_URL}/categories/`, {
    name,
  });
  return response;
}
