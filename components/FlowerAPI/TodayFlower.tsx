import Image from 'next/image';
import fetchData from './CallAPI';

const TodayFlower = async () => {
  try {
    const data = await fetchData();
    const item = data.document.root[0].result[0];

    return (
      <article>
        <header className="bg-[url('/image/background-img/title_bg.jpg')] bg-center bg-cover h-28">
          <h1 className="font-extrabold text-4xl text-slate-300">오늘의 꽃</h1>
        </header>
        <section className="mt-8">
          <h2>{item.flowNm[0]}</h2>
          <div className="flex justify-center gap-4">
            <Image
              src={item.imgUrl1[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-1/4"
            />
            <Image
              src={item.imgUrl2[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-1/4"
            />
            <Image
              src={item.imgUrl3[0]}
              alt={item.flowNm[0]}
              width={100}
              height={100}
              className="w-1/4"
            />
          </div>
        </section>
        <section>
          <p>꽃말 : {item.flowLang[0]}</p>
          <p>{item.fContent[0]}</p>
          <p>출처 : {item.publishOrg[0]}</p>
        </section>
      </article>
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
