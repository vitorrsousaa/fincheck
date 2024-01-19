import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input(props: InputProps) {
  const { placeholder, name, id, ...inputProps } = props;

  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...inputProps}
        id={inputId}
        name={name}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[3.25rem] text-gray-800 pt-4 peer placeholder-show:pt-0 placeholder-shown:pt-1 focus:border-gray-800 outline-none transition-all"
        placeholder=" "
      />

      <label
        htmlFor={inputId}
        className="absolute text-xs top-2 left-[13px] pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all peer"
      >
        {placeholder}
      </label>
    </div>
  );
}
