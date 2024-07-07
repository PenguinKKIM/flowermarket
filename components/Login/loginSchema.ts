import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR_MESSAGE,
} from '@/lib/constant';
import dataBase from '@/lib/dataBase';
import { z } from 'zod';

// eslint-disable-next-line consistent-return
const checkEmail = async (email: string) => {
  const user = await dataBase.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (user) return true;
};

const loginSchema = z.object({
  email: z
    .string()
    .email(EMAIL_ERROR_MESSAGE)
    .refine(checkEmail, '존재하지 않는 이메일입니다'),
  password: z
    .string({ required_error: '패스워드를 입력해주세요.' })
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR_MESSAGE),
});

export default loginSchema;
