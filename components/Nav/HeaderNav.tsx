import Link from 'next/link';
import { linkConatinerStyle, linkStyle, navStyle } from './HeaderNavCVA';

function HeaderNav() {
  return (
    <nav className={navStyle()}>
      <Link href="/" className={`${linkStyle()} font-black text-indigo-400`}>
        맑은정원
      </Link>
      <div className={`${linkConatinerStyle()}`}>
        <Link href="/main" className="py-4">
          회사소개
        </Link>
        <Link href="/main" className="py-4">
          꽃시장
        </Link>
        <Link href="/main" className="py-4">
          고객센터
        </Link>
      </div>
      <div className={linkConatinerStyle()}>
        <Link href="/main">로그인</Link>
        <Link href="/main">회원가입</Link>
      </div>
    </nav>
  );
}

export default HeaderNav;
