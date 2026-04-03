"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavGroup } from "@/content/navigation";

interface MobileNavProps {
  navGroups: NavGroup[];
  uzHref: string;
  ruHref: string;
  isRu: boolean;
}

export default function MobileNav({ navGroups, uzHref, ruHref, isRu }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#16192b] border-t border-[#252944] shadow-2xl z-50 max-h-[80vh] overflow-y-auto">
          {/* Language switcher */}
          <div className="flex gap-2 px-4 py-3 border-b border-[#252944]">
            <Link
              href={uzHref}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase transition-colors ${
                !isRu ? "bg-pink-500 text-white" : "text-gray-300 hover:text-white border border-gray-600"
              }`}
            >
              O&apos;zbek
            </Link>
            <Link
              href={ruHref}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase transition-colors ${
                isRu ? "bg-pink-500 text-white" : "text-gray-300 hover:text-white border border-gray-600"
              }`}
            >
              Русский
            </Link>
          </div>

          <nav className="py-2">
            {navGroups.map((group) => (
              <div key={group.label}>
                {group.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {group.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${openGroup === group.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openGroup === group.label && (
                      <div className="bg-[#161929] border-t border-[#252944]">
                        {group.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-8 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={group.href ?? "#"}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {group.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
