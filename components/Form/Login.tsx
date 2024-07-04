import { inputStyle, labelStyle } from './InputCVA';

function Login() {
  return (
    <section className="w-full flex items-center justify-center flex-col my-4">
      <h1>로그인</h1>
      <form className="w-1/3 flex flex-col gap-5  bg-blue-50 p-8 rounded-lg">
        <label htmlFor="email" className={labelStyle()}>
          이메일
          <input
            type="text"
            name="email"
            id="email"
            className={inputStyle()}
            placeholder="이메일을 입력해주세요"
          />
        </label>
        <label htmlFor="password" className={labelStyle()}>
          <p>비밀번호</p>
          <input
            type="text"
            name="password"
            id="password"
            className={inputStyle()}
            placeholder="비밀번호를 입력해주세요"
          />
        </label>

        <button
          type="submit"
          className="p-4 rounded-lg bg-blue-400 text-white hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
    </section>
  );
}

export default Login;
