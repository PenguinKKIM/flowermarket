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

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/;

const dataSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: '닉네임은 문자열이여야 합니다.',
        required_error: '닉네임을 찾을수없습니다',
      })
      .min(3, '닉네임은 세자리 이상이어야 합니다.')
      .max(10, '닉네임은 10자리 이하여야합니다.')
      .trim(),
    email: z.string().email('올바른 형식의 이메일을 입력해주세요.'),
    password: z
      .string()
      .min(6, '비밀번호는 6자리이상이어야 합니다')
      .regex(
        passwordRegex,
        '비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야합니다.',
      ),
    passwordCheck: z.string(),
  })
  .refine(passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export default dataSchema;
