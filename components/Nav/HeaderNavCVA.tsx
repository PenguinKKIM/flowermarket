import { cva } from 'class-variance-authority';

const navStyle = cva(
  'flex justify-between items-center bg-sky-50 py-2 px-8 shrink-0',
);
const linkConatinerStyle = cva('flex gap-10 shrink-0');
const linkStyle = cva('py-4');

export { navStyle, linkConatinerStyle, linkStyle };
