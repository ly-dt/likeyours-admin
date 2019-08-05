import axios from 'axios';
import { BASE_URL } from '..';

export default async function createUser(details) {
  const response = await axios.post(`${BASE_URL}/users/`, {
    ...details,
  });
  return response;
}
