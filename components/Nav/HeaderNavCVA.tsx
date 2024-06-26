import { cva } from 'class-variance-authority';

const navStyle = cva(
  'flex justify-between items-center bg-sky-50 p-2 shrink-0',
);
const linkConatinerStyle = cva('flex gap-10 shrink-0');
const linkStyle = cva();

export { navStyle, linkConatinerStyle, linkStyle };
