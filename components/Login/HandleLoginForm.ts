'use server';

// import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import dataBase from '@/lib/dataBase';
import getSeccion from '@/lib/session';
import loginSchema from './loginSchema';

// eslint-disable-next-line consistent-return, @typescript-eslint/no-explicit-any
async function handleLoginForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = await loginSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  }
  const user = await dataBase.user.findUnique({
    where: {
      email: result.data.email,
    },
    select: {
      id: true,
      password: true,
    },
  });
  const loginSuccess = await bcrypt.compare(
    result.data.password,
    user!.password ?? '',
  );
  if (loginSuccess) {
    const session = await getSeccion();
    session.id = user!.id;
  } else {
    return {
      fieldErrors: {
        password: ['잘못된 비밀번호입니다'],
        email: [],
      },
    };
  }
}

export default handleLoginForm;
