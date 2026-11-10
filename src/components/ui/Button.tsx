import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "accent";
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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-500/25 focus-visible:ring-indigo-500 active:scale-[0.98]",
    secondary:
      "bg-slate-800/90 hover:bg-slate-700 active:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 focus-visible:ring-slate-400 active:scale-[0.98]",
    accent:
      "bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-semibold shadow-sm hover:shadow-cyan-500/25 focus-visible:ring-cyan-400 active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-indigo-600/10 text-indigo-400 hover:text-indigo-300 border border-indigo-500/40 hover:border-indigo-400 focus-visible:ring-indigo-500",
    ghost:
      "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white focus-visible:ring-slate-500",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white font-medium shadow-md shadow-emerald-950/20 focus-visible:ring-emerald-400 active:scale-[0.98]",
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

