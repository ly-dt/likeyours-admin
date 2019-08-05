import axios from 'axios';
import { BASE_URL } from '..';

export default async function createRentable(details) {
  const response = await axios.post(`${BASE_URL}/rentables/`, {
    ...details,
  });
  return response;
}
