import React from "react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  iconName?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  isDark?: boolean;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconName,
  icon,
  title,
  description,
  badge,
  isDark = false,
  className = "",
}) => {
  // Dynamically resolve icon from Lucide if iconName provided
  const renderIcon = () => {
    if (icon) return icon;
    if (iconName && iconName in LucideIcons) {
      const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
      if (IconComponent) {
        return <IconComponent className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />;
      }
    }
    return <LucideIcons.CheckCircle className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />;
  };

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between ${
        isDark
          ? "bg-slate-900/90 border border-slate-800 hover:border-slate-700"
          : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              isDark
                ? "bg-slate-800 border border-slate-700 text-blue-400"
                : "bg-blue-50 border border-blue-200/80 text-blue-600"
            }`}
          >
            {renderIcon()}
          </div>
          {badge && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                isDark
                  ? "bg-blue-950 text-blue-400 border border-blue-800"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
        <h3
          className={`text-lg font-bold mb-2 ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
