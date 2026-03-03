import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: Input) => {
  return (
    <input
      type={type}
      className="w-full h-11 rounded-full border border-white px-6 text-sm placeholder:text-white"
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
