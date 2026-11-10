import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "accent" | "dark-primary" | "dark-secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-5 py-3 text-sm sm:text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow focus-visible:ring-blue-500 active:scale-[0.99]",
    secondary:
      "bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 border border-slate-300 shadow-sm focus-visible:ring-slate-400 active:scale-[0.99]",
    accent:
      "bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold shadow-sm focus-visible:ring-teal-500 active:scale-[0.99]",
    outline:
      "bg-transparent hover:bg-blue-50 text-blue-700 hover:text-blue-800 border border-blue-200 hover:border-blue-300 focus-visible:ring-blue-500",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 focus-visible:ring-slate-400",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] text-white font-medium shadow-sm focus-visible:ring-emerald-500 active:scale-[0.99]",
    "dark-primary":
      "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-sm focus-visible:ring-blue-400 active:scale-[0.99]",
    "dark-secondary":
      "bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-slate-100 border border-slate-700 hover:border-slate-600 focus-visible:ring-slate-400 active:scale-[0.99]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
