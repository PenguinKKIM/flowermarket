'use server';

import { redirect } from 'next/navigation';
import loginSchema from './loginSchema';

// eslint-disable-next-line consistent-return, @typescript-eslint/no-explicit-any
async function handleLoginForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = loginSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
  redirect('/');
}

export default handleLoginForm;
