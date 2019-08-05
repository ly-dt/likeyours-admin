import axios from 'axios';
import { BASE_URL } from '../';

export default async function deleteStation(id) {
  const response = await axios.delete(`${BASE_URL}/stations/${id}`);
  return response;
}
