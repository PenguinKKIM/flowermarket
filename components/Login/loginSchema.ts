import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR_MESSAGE,
} from '@/lib/constant';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(EMAIL_ERROR_MESSAGE),
  password: z
    .string({ required_error: '패스워드를 입력해주세요.' })
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR_MESSAGE),
});

export default loginSchema;
