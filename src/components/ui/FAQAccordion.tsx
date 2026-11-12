"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = "",
  defaultOpenIndex = 0,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`divide-y divide-white/10 border-t border-b border-white/10 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const numStr = String(index + 1).padStart(2, "0");
        return (
          <div key={index} className="transition-colors duration-150">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 sm:py-6 text-left group focus:outline-none"
            >
              <div className="flex items-center gap-4 sm:gap-6 pr-4 flex-1">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#06B6D4]/80 shrink-0">
                  {numStr}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#F9FAFB] group-hover:text-white transition-colors">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200 ${
                  isOpen
                    ? "bg-[#1F2937] border-white/20 text-[#F9FAFB]"
                    : "bg-[#111827] border-white/10 text-[#9CA3AF] group-hover:border-white/20 group-hover:text-white"
                }`}
              >
                {isOpen ? <X className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>
            {isOpen && (
              <div className="pl-8 sm:pl-12 pr-4 pb-6 text-sm text-[#9CA3AF] leading-relaxed animate-in fade-in duration-150">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
