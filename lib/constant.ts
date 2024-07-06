const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/;

const PASSWORD_REGEX_ERROR_MESSAGE =
  '비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야합니다.';

const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MIN_LENGTH_ERROR_MESSAGE = '비밀번호는 6자리이상이어야 합니다';

const EMAIL_ERROR_MESSAGE = '올바른 형식의 이메일을 입력해주세요.';

export {
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
};
