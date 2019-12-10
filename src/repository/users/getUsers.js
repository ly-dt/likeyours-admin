import axios from 'axios';
import { BASE_URL } from '../';
import dataFormatterForTables from '../../utils/dataFormatterForTables';

export default async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  const formattedData = dataFormatterForTables(response.data.users);
  return formattedData;
}
