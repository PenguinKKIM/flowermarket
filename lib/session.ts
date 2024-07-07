import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

interface FlowerCookie {
  id?: number;
}

export default function getSeccion() {
  return getIronSession<FlowerCookie>(cookies(), {
    cookieName: 'flowerShopCookie',
    password: process.env.NEXT_PUBLIC_FLOWER_COOKIE_PASSWORD!,
  });
}
