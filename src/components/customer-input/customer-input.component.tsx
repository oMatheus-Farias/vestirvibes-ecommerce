import { InputHTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  autoComplete?: string;
}

const CustomerInput = ({
  type,
  name,
  placeholder,
  register,
  error,
  rules,
  autoComplete,
}: InputProps) => {
  return (
    <>
      <input
        className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
        style={{ color: error ? "#FF2D2D" : "#000" }}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete={autoComplete}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </>
  );
};

export default CustomerInput;
