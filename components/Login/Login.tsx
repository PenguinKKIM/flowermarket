'use client';

import { useFormState } from 'react-dom';
import FormButton from '../Form/FormButton';
import FormInput from '../Form/FormInput';
import { formSectionStyle, formStyle } from '../Form/InputCVA';

import handleLoginForm from './HandleLoginForm';

function Login() {
  const [state, dispatch] = useFormState(handleLoginForm, null);
  return (
    <section className={formSectionStyle()}>
      <h1>로그인</h1>
      <form action={dispatch} className={formStyle()}>
        <FormInput
          labelName="이메일"
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          required={false}
          error={state?.fieldErrors.email}
        />
        <FormInput
          labelName="비밀번호"
          type="password"
          name="password"
          id="password"
          placeholder="패스워드를 입력해주세요"
          required={false}
          error={state?.fieldErrors.password}
        />
        <FormButton type="submit" text="로그인" />
      </form>
    </section>
  );
}

export default Login;
