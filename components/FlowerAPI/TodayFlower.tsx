import Image from 'next/image';
import fetchData from './CallAPI';

const getNewDate = new Date();
const day = getNewDate.getDate();
const month = getNewDate.getMonth() + 1;

const TodayFlower = async () => {
  try {
    const data = await fetchData();
    const item = data.document.root[0].result[0];

    return (
      <article className="my-4">
        <header className="relative bg-[url('/image/background-img/title_bg.jpg')] bg-center bg-cover h-28 ">
          <h1 className="absolute top-1/2 left-4 font-semibold text-4xl text-slate-50">{`${month}월 ${day} 일 오늘의 꽃`}</h1>
        </header>
        <section className="mt-8">
          <h2 className="px-8 text-lg">{item.flowNm[0]}</h2>
          <div className="w-full grid grid-cols-3 gap-1 p-8">
            <Image
              src={item.imgUrl1[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src={item.imgUrl2[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src={item.imgUrl3[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        </section>
        <section className="p-8">
          <p>꽃말 : {item.flowLang[0]}</p>
          <p className="break-all">{item.fContent[0]}</p>
          <p>출처 : {item.publishOrg[0]}</p>
        </section>
      </article>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error fetching data{`${error}`}</h1>
      </div>
    );
  }
};

export default TodayFlower;
