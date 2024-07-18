'use client';

import Link from 'next/link';
import { useState } from 'react';
import { linkStyle, navStyle } from './HeaderNavCVA';

function HeaderNav() {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`${navStyle()} relative`}>
      <Link href="/" className={`${linkStyle()} font-black text-indigo-400`}>
        맑은정원
      </Link>
      <button
        className="hidden max-sm:flex hover:cursor-pointer"
        onClick={toggleNav}
      >
        메뉴
      </button>
      <div
        className={`${
          toggle
            ? 'absolute w-full top-16 left-0 flex flex-col p-5 gap-1'
            : 'max-sm:hidden'
        } sm:flex sm:gap-6 sm:static sm:flex-row sm:w-auto sm:p-0`}
      >
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-6">
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
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-6">
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
