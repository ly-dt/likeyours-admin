import axios from 'axios';
import { BASE_URL } from '..';

export default async function deleteUser(id) {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  return response;
}
