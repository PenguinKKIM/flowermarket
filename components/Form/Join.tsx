import { inputStyle, labelStyle } from './InputCVA';

function Join() {
  return (
    <form className="w-1/2 flex flex-col gap-5">
      <label htmlFor="nickname" className={labelStyle()}>
        닉네임
        <input
          type="text"
          name="nickname"
          id="nickname"
          className={inputStyle()}
        />
      </label>
      <label htmlFor="email" className={labelStyle()}>
        이메일 className={inputStyle()}
        <input type="text" name="email" id="email" className={inputStyle()} />
      </label>
      <label htmlFor="password" className="flex flex-col">
        비밀번호
        <input
          type="text"
          name="password"
          id="password"
          className="bg-slate-100"
        />
      </label>
      <label htmlFor="passwordCheck" className={labelStyle()}>
        비밀번호 확인
        <input
          type="text"
          name="passwordCheck"
          id="passwordCheck"
          className={inputStyle()}
        />
      </label>
      <button type="submit" className="w-full bg-blue-400">
        가입하기
      </button>
    </form>
  );
}

export default Join;
