import axios from 'axios';
import { BASE_URL } from '..';

export default async function getSpecificUser(id) {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response;
}
