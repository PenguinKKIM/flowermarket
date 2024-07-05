import { z } from 'zod';

const LoginSchema = z.object({
  userEmail: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(6, '비밀번호는 6자리 이상이어야 합니다'),
});

export default LoginSchema;
