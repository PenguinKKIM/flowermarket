import { cva } from 'class-variance-authority';

const navStyle = cva('flex justify-between items-center bg-sky-50 p-2');
const linkConatinerStyle = cva('flex gap-10');
const linkStyle = cva('p-2');

export { navStyle, linkConatinerStyle, linkStyle };
