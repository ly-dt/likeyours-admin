import axios from 'axios';
import { BASE_URL } from '..';

export default async function updateRentable(payload) {
  const { id, name, address, details } = payload;
  const response = await axios.put(`${BASE_URL}/stations/${id}`, {
    name,
    address,
    details,
  });
  console.log(response);
  return response;
}
