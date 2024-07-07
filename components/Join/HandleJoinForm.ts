'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import dataBase from '@/lib/dataBase';
import getSeccion from '@/lib/session';
import joinSchema from './joinSchema';

// eslint-disable-next-line consistent-return, @typescript-eslint/no-explicit-any
async function handelJoinForm(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordCheck: formData.get('passwordCheck'),
  };
  const result = await joinSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  }
  const hashPassword = await bcrypt.hash(result.data.password, 12);
  const user = await dataBase.user.create({
    data: {
      username: result.data.name,
      email: result.data.email,
      password: hashPassword,
    },
    select: {
      id: true,
    },
  });
  const cookie = await getSeccion();

  cookie.id = user.id;
  await cookie.save();
  redirect('/login');
}

export default handelJoinForm;
