import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

function Button({
  variant = "primary",
  disabled = false,
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClass =
    " w-full relative outline-none rounded-full transition-all duration-700 ease-in-out font-semibold px-8 md:px-12 py-3 lg:text-base text-sm disabled:opacity-70 disabled:cursor-not-allowed";

  const primaryClass =
    "bg-primary-25 text-white border border-transparent hover:bg-primary-500 hover:text-white";

  const secondaryClass =
    "bg-transparent text-white border border-white hover:bg-white hover:text-black";

  const variantClass = variant === "primary" ? primaryClass : secondaryClass;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
