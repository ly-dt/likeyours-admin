import axios from 'axios';
import { BASE_URL } from '../';
import dataFormatterForTables from '../../utils/dataFormatterForTables';

export default async function getRentables() {
  const response = await axios.get(`${BASE_URL}/rentables`);
  const formattedData = dataFormatterForTables(response.data.data);
  return formattedData;
}
