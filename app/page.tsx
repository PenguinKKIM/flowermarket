import TodayFlower from '@/components/FlowerAPI/TodayFlower';

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/image/background-img/main_bg.jpg')] bg-top bg-no-repeat bg-cover w-full h-screen">
        안녕하세요 맑은정원 입니다
      </div>
      <TodayFlower />
    </main>
  );
}
