'use server';

import { redirect } from 'next/navigation';
import joinSchema from './joinSchema';

// eslint-disable-next-line consistent-return, @typescript-eslint/no-explicit-any
async function handelJoinForm(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordCheck: formData.get('passwordCheck'),
  };
  const result = joinSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
  redirect('/login');
}

export default handelJoinForm;
