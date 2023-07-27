import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const input = cva("textField", {
  variants: {
    intent: {
      primary: [
        "w-36",
        "bg-white",
        "border",
        "border-black",
        "rounded",
        "p-1",
        "text-white",
        "border-transparent",
        "hover:bg-gray-100",
      ],
      secondary: [
        "bg-white",
        "w-56",
        "h-11",
        "border",
        "border-red-500",
        "rounded",
        "p-1",
        "text-white",
        "border-transparent",
        "hover:bg-red-50",
      ],
      tertiary: [
        "bg-white",
        "w-64",
        "h-14",
        "border",
        "border-blue-500",
        "rounded",
        "p-1",
        "text-white",
        "border-transparent",
        "hover:bg-blue-50",
      ],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export const Input: React.FC<InputProps> = ({ intent, ...props }) => (
  <input placeholder={props.placeholder} className={input({ intent })}></input>
);
