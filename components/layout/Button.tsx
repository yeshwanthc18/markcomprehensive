import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

// 🔹 Primary Button
export const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex justify-center items-center gap-2 rounded-md font-medium text-white px-6 py-2 transition-all duration-300",
        "bg-gradient-to-r from-[#1564e5] to-[#01adff]",
        "hover:shadow-[0_0_12px_rgba(21,100,229,0.6)] hover:scale-[1.02]",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

// 🔹 Secondary Button
export const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex justify-center items-center gap-2 rounded-md font-medium px-6 py-4 transition-all duration-300 border border-[#01adff] text-[#01adff] bg-transparent",
        "hover:bg-gradient-to-r hover:from-[#1564e5] hover:to-[#01adff] hover:text-white hover:shadow-[0_0_12px_rgba(21,100,229,0.6)] hover:scale-[1.02]",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
