import axios from 'axios';
import { BASE_URL } from '..';

export default async function getRentables() {
  const response = await axios.get(`${BASE_URL}/rentables`);
  return response;
}
