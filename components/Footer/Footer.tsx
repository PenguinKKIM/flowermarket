import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-slate-600 w-full">
      <div className="p-8">
        <header className="font-black text-gray-200 text-xs">맑은정원</header>
        <div className="font-thin text-xs text-gray-200">김희준</div>
        <Link
          href="https://github.com/PenguinKKIM/"
          className="font-thin text-xs text-gray-200"
        >
          https://github.com/PenguinKKIM/
        </Link>
        <div className="font-thin text-xs text-gray-200">clfrck@naver.com</div>
      </div>
    </footer>
  );
}

export default Footer;
