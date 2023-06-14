import { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from "react-hook-form/dist/types";
import "../books/styles/form.css"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<FieldValues>;
}

export const Input = ({
  label,
  name,
  register,
  required,
  type,
  onChange,
  placeholder,
  errors,
}: InputProps) => {
  const errorText = errors?.[name]?.message as string;
  return (
    <div className="input-main-container">
        {label && <label htmlFor={name}>{label}</label>}
        <div>
          <input
            {...(register?.(name) ?? {})}
            required={required}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
      </div>
      {errorText && <p className="error">{errorText}</p>}
    </div>
  );
};
