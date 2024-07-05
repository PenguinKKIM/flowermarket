'use client';

import { useFormStatus } from 'react-dom';

interface FormButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
}

function FormButton({ text, type, ...props }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={type}
      className="p-4 rounded-lg bg-blue-400 text-white hover:bg-blue-600 disabled:bg-slate-500"
      {...props}
    >
      {pending ? '로그인 중' : text}
    </button>
  );
}

export default FormButton;
