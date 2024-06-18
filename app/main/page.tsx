// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
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

const TodayFlower = async () => {
  try {
    const data = await fetchData();
    const item = data.document.root[0].result[0];

    return (
      <div>
        <h1>오늘의 꽃</h1>
        {/* ToDo : Image 알아보기 */}
        <Image
          src={item.imgUrl1[0]}
          alt={item.flowNm[0]}
          width={100}
          height={100}
          layout="responsive"
        />
        <Image
          src={item.imgUrl2[0]}
          alt={item.flowNm[0]}
          width={100}
          height={100}
          layout="responsive"
        />
        <Image
          src={item.imgUrl3[0]}
          alt={item.flowNm[0]}
          width={100}
          height={100}
          layout="responsive"
        />
        <h2>{item.flowNm[0]}</h2>
        <p>{item.flowLang[0]}</p>
        <p>{item.fContent[0]}</p>
        <p>출처 : {item.publishOrg[0]}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error fetching data</h1>
      </div>
    );
  }
};

export default TodayFlower;
