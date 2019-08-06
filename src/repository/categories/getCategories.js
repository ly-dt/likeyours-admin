import axios from 'axios';
import { BASE_URL } from '..';
import dataFormatterForTables from '../../utils/dataFormatterForTables';

export default async function getCategories() {
  const response = await axios.get(`${BASE_URL}/categories/`);
  const formattedData = dataFormatterForTables(response.data.categorys);
  return formattedData;
}
