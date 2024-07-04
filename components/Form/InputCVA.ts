import { cva } from 'class-variance-authority';

const inputStyle = cva(
  'bg-slate-50 flex p-4 rounded-lg placeholder:text-sm placeholder:font-thin ',
);

const labelStyle = cva('flex flex-col gap-2');

export { inputStyle, labelStyle };
