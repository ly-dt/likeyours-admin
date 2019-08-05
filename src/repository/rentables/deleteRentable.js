import axios from 'axios';
import { BASE_URL } from '..';

export default async function deleteRentable(id) {
  const response = await axios.delete(`${BASE_URL}/rentables/${id}`);
  return response;
}
