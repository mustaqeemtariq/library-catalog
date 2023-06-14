import { InputHTMLAttributes } from "react";
import "../books/styles/form.css"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export const Input = ({
  label,
  name,
  required,
  type,
  onChange,
  placeholder
}: InputProps) => {
  return (
    <div className="input-main-container">
        {label && <label htmlFor={name}>{label}</label>}
        <div>
          <input
            required={required}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
      </div>
    </div>
  );
};
