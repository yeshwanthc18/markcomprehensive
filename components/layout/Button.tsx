import React from "react";
import { cn } from "@/lib/utils"; 

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const ButtonPrimary: React.FC<ButtonProps> = ({
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
        "flex justify-center items-center bg-gradient-to-r from-[#1564e5] to-[#1564e5]/80 hover:from-[#1564e5]/90 hover:to-[#01adff]/90 text-white font-medium px-6 py-2 transition-all duration-200",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
