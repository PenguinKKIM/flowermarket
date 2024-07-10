'use client';

import { cva } from 'class-variance-authority';
import { useFormStatus } from 'react-dom';

type Intent = 'primary' | 'disable';

interface FormButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  intent?: Intent;
}

const buttonStyleCVA = cva(
  'p-4 rounded-lg bg-blue-400 text-white hover:bg-blue-600 disabled:bg-slate-500',
  {
    variants: {
      intent: {
        primary: 'bg-blue-400',
        disable: 'bg-gray-100',
      },
    },
  },
);

function FormButton({ text, type, intent, ...props }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={type}
      className={buttonStyleCVA({ intent })}
      {...props}
    >
      {pending ? '잠시 기다려주세요' : text}
    </button>
  );
}

export default FormButton;
