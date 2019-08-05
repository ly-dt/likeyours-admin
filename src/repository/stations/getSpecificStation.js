import axios from 'axios';
import { BASE_URL } from '../';

export default async function getSpecificStation(id) {
  const response = await axios.get(`${BASE_URL}/stations/${id}`);
  return response;
}
