import { InputHTMLAttributes } from 'react';
import { inputStyle, labelStyle } from './InputCVA';

interface FormInputProps {
  labelName: string;
  id: string;
  name: string;
  error?: string[];
}

function FormInput({
  labelName,
  id,
  name,
  error = [],
  ...props
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className={labelStyle()}>
      <span>{labelName}</span>
      <input name={name} className={inputStyle()} {...props} />
      {error.map((errors, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index} className="text-red-500 font-medium text-sm">
          {errors}
        </span>
      ))}
    </label>
  );
}

export default FormInput;
