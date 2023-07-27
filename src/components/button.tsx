import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "w-20",
        "h-12",
        "rounded-md",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-blue-500",
        "text-white",
        "w-38",
        "h-14",
        "rounded-md",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      tertiary:[
        "bg-blue-500",
        "text-white",
        "w-56",
        "h-16",
        "rounded-md",
        "border-transparent",
        "hover:bg-blue-600",
      ]
    },
    size: {
      small: ["text-sm", "px-2"],
      medium: ["text-base", "px-4"],
      large: ["text-lg", "px-4"]
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  ...props
}) => <button className={button({ intent, size })}{...props}>{props.about}</button>;
