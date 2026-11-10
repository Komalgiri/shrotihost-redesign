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
      "bg-[#4F46E5] hover:bg-indigo-500 active:bg-indigo-700 text-[#F9FAFB] shadow-md hover:shadow-indigo-500/25 focus-visible:ring-[#4F46E5] active:scale-[0.99]",
    secondary:
      "bg-[#1F2937] hover:bg-[#374151] active:bg-[#111827] text-[#F9FAFB] border border-white/10 shadow-sm focus-visible:ring-slate-400 active:scale-[0.99]",
    accent:
      "bg-[#06B6D4] hover:bg-[#22D3EE] active:bg-[#0891B2] text-[#0B0F19] font-bold shadow-sm focus-visible:ring-[#06B6D4] active:scale-[0.99]",
    outline:
      "bg-transparent hover:bg-[#1F2937] text-[#06B6D4] hover:text-[#22D3EE] border border-[#06B6D4]/40 hover:border-[#06B6D4] focus-visible:ring-[#06B6D4]",
    ghost:
      "bg-transparent hover:bg-[#1F2937] text-[#9CA3AF] hover:text-[#F9FAFB] focus-visible:ring-slate-400",
    whatsapp:
      "bg-[#10B981] hover:bg-emerald-600 active:bg-emerald-700 text-white font-semibold shadow-sm focus-visible:ring-[#10B981] active:scale-[0.99]",
    "dark-primary":
      "bg-[#4F46E5] hover:bg-indigo-500 active:bg-indigo-700 text-[#F9FAFB] shadow-md focus-visible:ring-[#4F46E5] active:scale-[0.99]",
    "dark-secondary":
      "bg-[#1F2937] hover:bg-[#374151] active:bg-[#111827] text-[#F9FAFB] border border-white/10 focus-visible:ring-slate-400 active:scale-[0.99]",
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
