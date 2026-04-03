"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/brands";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Tez-tez so&apos;raladigan savollar
      </h2>
      <div className="space-y-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={`ml-4 flex-shrink-0 text-blue-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
