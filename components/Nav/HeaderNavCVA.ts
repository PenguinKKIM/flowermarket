import { cva } from 'class-variance-authority';

const navStyle = cva(
  'flex justify-between items-center bg-sky-50 py-2 px-8 shrink-0 ',
);
const linkConatinerStyle = cva('flex gap-10 shrink-0 max-sm:hidden');
const linkStyle = cva('bg-blue-400 p-2 sm:bg-sky-50 sm:py-4');

const mobileNavLiStyle = cva(
  'w-full flex justify-center bg-blue-600 gap-4 p-5 hover:bg-slate-600',
);

export { navStyle, linkConatinerStyle, linkStyle, mobileNavLiStyle };
