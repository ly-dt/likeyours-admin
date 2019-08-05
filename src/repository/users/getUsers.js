import axios from 'axios';
import { BASE_URL } from '..';

export default async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response;
}
