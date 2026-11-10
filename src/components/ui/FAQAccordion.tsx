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
    <div className={`space-y-3.5 max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-slate-900/90 border-indigo-500/40 shadow-lg shadow-indigo-950/20"
                : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="text-base sm:text-lg font-semibold text-white pr-4">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-indigo-500/20 border-indigo-500/40 text-indigo-400"
                    : "bg-slate-800 border-slate-700 text-slate-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

