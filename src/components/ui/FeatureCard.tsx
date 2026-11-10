import React from "react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  iconName?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconName,
  icon,
  title,
  description,
  badge,
  className = "",
}) => {
  // Dynamically resolve icon from Lucide if iconName provided
  const renderIcon = () => {
    if (icon) return icon;
    if (iconName && iconName in LucideIcons) {
      const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
      if (IconComponent) {
        return <IconComponent className="w-6 h-6 text-indigo-400" />;
      }
    }
    return <LucideIcons.CheckCircle className="w-6 h-6 text-indigo-400" />;
  };

  return (
    <div
      className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
            {renderIcon()}
          </div>
          {badge && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-2.5">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
