import { cva } from 'class-variance-authority';

const formSectionStyle = cva(
  'w-full flex items-center justify-center flex-col my-4',
);

const formStyle = cva('w-1/3 flex flex-col gap-5  bg-blue-50 p-8 rounded-lg');

const inputStyle = cva(
  'bg-slate-50 flex p-4 rounded-lg placeholder:text-sm placeholder:font-thin ',
);

const labelStyle = cva('flex flex-col gap-2');

export { inputStyle, labelStyle, formSectionStyle, formStyle };
