import Link from 'next/link';
import { linkConatinerStyle, linkStyle, navStyle } from './HeaderNavCVA';

function HeaderNav() {
  return (
    <nav className={navStyle()}>
      <Link href="/" className={linkStyle()}>
        맑은정원 로고
      </Link>
      <div className={linkConatinerStyle()}>
        <Link href="/main" className={linkStyle()}>
          회사소개
        </Link>
        <Link href="/main" className={linkStyle()}>
          꽃시장
        </Link>
        <Link href="/main" className={linkStyle()}>
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
