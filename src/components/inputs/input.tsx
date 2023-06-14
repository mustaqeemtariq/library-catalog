import { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
} from "react-hook-form/dist/types";

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
  type,
  onChange,
  placeholder,
  errors,
}: InputProps) => {
  const errorText = errors?.[name]?.message as string;
  return (
    <div className="w-full">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="mt-1">
          <input
            {...(register?.(name) ?? {})}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className="rounded border w-full border-gray-300 p-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
          />
      </div>
      {errorText && <p className="text-xs text-red-600">{errorText}</p>}
    </div>
  );
};
