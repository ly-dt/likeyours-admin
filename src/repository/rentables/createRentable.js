import axios from 'axios';
import { BASE_URL } from '..';

export default async function createRentable(details) {
  const response = await axios.post(`${BASE_URL}/rentables/`, {
    ...details,
    price_currency: 'USD',
    price_unit: 'per hour',
    status: 'AVAILABLE',
  });
  return response;
}
