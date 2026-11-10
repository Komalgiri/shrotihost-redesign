"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-[#111827] ${
              isOpen
                ? "border-[#4F46E5]/40 shadow-xl ring-1 ring-indigo-500/20"
                : "border-white/10 hover:border-white/20 shadow-card"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="text-base sm:text-lg font-bold text-[#F9FAFB] pr-4">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-[#1F2937] border-indigo-500/40 text-[#06B6D4]"
                    : "bg-[#0B0F19] border-white/10 text-[#9CA3AF]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] leading-relaxed border-t border-white/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
