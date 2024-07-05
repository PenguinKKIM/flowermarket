'use client';

import { useFormState } from 'react-dom';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { formSectionStyle, formStyle } from './InputCVA';
import handelJoinForm from './HandleJoinForm';

function Join() {
  const [state, dispatch] = useFormState(handelJoinForm, null);
  return (
    <section className={formSectionStyle()}>
      <h1>회원가입</h1>
      <form action={dispatch} className={formStyle()}>
        <FormInput
          labelName="닉네임"
          type="text"
          name="name"
          id="name"
          placeholder="닉네임을 입력해주세요"
          required={false}
          error={state?.fieldErrors.name}
        />
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
          placeholder="비밀번호를을 입력해주세요"
          required={false}
          error={state?.fieldErrors.password}
        />
        <FormInput
          labelName="비밀번호 확인"
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          placeholder="비밀번호를을 다시 입력해주세요"
          required={false}
          error={state?.fieldErrors.passwordCheck}
        />
        <FormButton type="submit" text="가입하기" />
      </form>
    </section>
  );
}

export default Join;
