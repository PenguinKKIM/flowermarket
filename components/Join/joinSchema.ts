import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR_MESSAGE,
} from '@/lib/constant';
import dataBase from '@/lib/dataBase';
import { z } from 'zod';

const passwordConfirm = ({
  password,
  passwordCheck,
}: {
  password: string;
  passwordCheck: string;
}): boolean => {
  return password === passwordCheck;
};

const checkUserName = async (username: string) => {
  const user = await dataBase.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !user;
};

const checkEmail = async (email: string) => {
  const user = await dataBase.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !user;
};

const joinSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: '닉네임은 문자열이여야 합니다.',
        required_error: '닉네임을 찾을수없습니다',
      })
      .min(2, '닉네임은 두자리 이상이어야 합니다.')
      .max(10, '닉네임은 10자리 이하여야합니다.')
      .trim()
      .refine(checkUserName, '이미 사용중인 닉네임 입니다'),
    email: z
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .refine(checkEmail, '이미 사용중인 이메일 입니다.'),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR_MESSAGE),
    passwordCheck: z.string(),
  })
  .refine(passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export default joinSchema;
