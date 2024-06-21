import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const getNewDate = new Date();
const day = getNewDate.getDate();
const month = getNewDate.getMonth();
const API_KEY = process.env.NEXT_PUBLIC_FLOWER_API_KEY;
const url =
  'https://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01';
const queryParams = `?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;

async function fetchData() {
  try {
    const response = await axios.get(url + queryParams);
    const json = await parseStringPromise(response.data);
    return json;
  } catch (error) {
    throw new Error(`HTTP error! status`);
  }
}

export default fetchData;
