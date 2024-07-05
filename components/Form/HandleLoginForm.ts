'use server';

import dataSchema from './dataSchema';

async function handleLoginForm(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = dataSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}

export default handleLoginForm;
