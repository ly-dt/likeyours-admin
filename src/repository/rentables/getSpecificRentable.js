import axios from 'axios';
import { BASE_URL } from '..';

export default async function getSpecificRentable(id) {
  const response = await axios.get(`${BASE_URL}/rentables/${id}`);
  return response;
}
