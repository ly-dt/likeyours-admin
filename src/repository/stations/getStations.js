import axios from 'axios';
import { BASE_URL } from '../';
import dataFormatterForTables from '../../utils/dataFormatterForTables';

export default async function getStations() {
  const response = await axios.get(`${BASE_URL}/stations/`);
  const formattedData = dataFormatterForTables(response.data.data);
  return formattedData;
}
