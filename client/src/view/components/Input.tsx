import { ComponentProps, forwardRef } from "react";

import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { placeholder, name, id, error, className, ...inputProps } = props;

  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...inputProps}
        ref={ref}
        id={inputId}
        name={name}
        className={cn(
          "bg-white w-full rounded-lg border border-gray-500 px-3 h-[3.25rem] text-gray-800 pt-4 peer placeholder-show:pt-0 placeholder-shown:pt-1 focus:border-gray-800 outline-none transition-all",
          error && "!border-red-900",
          className
        )}
        placeholder=" "
      />

      <label
        htmlFor={inputId}
        className="absolute text-xs top-2 left-[13px] pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all peer"
      >
        {placeholder}
      </label>

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-800 ">
          <CrossCircledIcon />
          <span className="text-sx">{error}</span>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
