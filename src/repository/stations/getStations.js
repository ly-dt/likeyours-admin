import axios from 'axios';
import { BASE_URL } from '../';

export default async function getStations() {
  const response = await axios.get(`${BASE_URL}/stations/`);
  return response;
}
