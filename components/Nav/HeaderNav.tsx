import Link from 'next/link';
import { linkConatinerStyle, linkStyle, navStyle } from './HeaderNavCVA';

function HeaderNav() {
  return (
    <nav className={`${navStyle()}`}>
      <Link href="/" className={`${linkStyle()} font-black text-indigo-400`}>
        맑은정원
      </Link>
      {/* Todo : 메뉴 눌렀을때 나오게하기, 아이콘구하기 */}
      <span className="hidden max-sm:flex">메뉴</span>
      <div className={`${linkConatinerStyle()}  max-sm:hidden`}>
        <ul className="flex gap-6">
          <li className={linkStyle()}>
            <Link href="/main">회사소개</Link>
          </li>
          <li className={linkStyle()}>
            <Link href="/main">꽃시장</Link>
          </li>
          <li className={linkStyle()}>
            <Link href="/main">고객센터</Link>
          </li>
        </ul>
        <ul className={linkConatinerStyle()}>
          <li className={linkStyle()}>
            <Link href="/login">로그인</Link>
          </li>
          <li className={linkStyle()}>
            <Link href="/join">회원가입</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
