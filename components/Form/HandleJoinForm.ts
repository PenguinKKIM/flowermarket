'use server';

import dataSchema from './dataSchema';

async function handelJoinForm(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordCheck: formData.get('passwordCheck'),
  };
  const result = dataSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}

export default handelJoinForm;
