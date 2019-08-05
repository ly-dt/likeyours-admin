import axios from 'axios';
import { BASE_URL } from '../';

export default async function createStation({ name, address, details }) {
  const response = await axios.post(`${BASE_URL}/stations/`, {
    name,
    address,
    details,
  });
  return response;
}
