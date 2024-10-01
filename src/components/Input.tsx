import React from "react";

const Input = ({
  size,
  helperText,
  color,
  maxLength,
  name,
  pattern,
  type,
  value,
  onChange,
  placeholder,
}: {
  size?: "big" | "small";
  helperText?: string;
  color?: "black" | "gray2" | "success" | "error";
  maxLength?: number;
  name?: string;
  pattern?: RegExp;
  type: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
}) => {
  const height = size === "big" ? "h-14" : "h-9";

  const borderColor =
    (color === "black" && "border-zinc-500") ||
    (color === "gray2" && "border-gray2") ||
    (color === "success" && "border-success") ||
    (color === "error" && "border-red-400") ||
    (!color && "border-zinc-300");

  const helperTextColor = color === "error" ? "text-red-400" : "text-zinc-300";

  const inputStyle =
    "p-2 px-3 w-full border border-solid rounded-lg text-sm font-normal";

  return (
    <div className="h-[50px]">
      <input
        type={type}
        value={value}
        name={name}
        pattern={`${pattern}`}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className={[inputStyle, borderColor, height].join(" ")}
      />

      {helperText && (
        <p className={[helperTextColor, "text-sm"].join(" ")}>{helperText}</p>
      )}
    </div>
  );
};

export default Input;
