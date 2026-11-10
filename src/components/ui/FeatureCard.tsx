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
  isDark = true,
  className = "",
}) => {
  // Dynamically resolve icon from Lucide if iconName provided
  const renderIcon = () => {
    if (icon) return icon;
    if (iconName && iconName in LucideIcons) {
      const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
      if (IconComponent) {
        return <IconComponent className="w-5 h-5 text-[#06B6D4]" />;
      }
    }
    return <LucideIcons.CheckCircle className="w-5 h-5 text-[#06B6D4]" />;
  };

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between bg-[#111827] border border-white/10 hover:bg-[#1F2937] hover:border-white/20 shadow-card hover:shadow-card-hover ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#0B0F19] border border-white/10 text-[#06B6D4]"
          >
            {renderIcon()}
          </div>
          {badge && (
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#4F46E5]/20 text-indigo-300 border border-[#4F46E5]/40"
            >
              {badge}
            </span>
          )}
        </div>
        <h3
          className="text-lg font-bold mb-2 text-[#F9FAFB]"
        >
          {title}
        </h3>
        <p
          className="text-xs sm:text-sm leading-relaxed text-[#9CA3AF]"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
