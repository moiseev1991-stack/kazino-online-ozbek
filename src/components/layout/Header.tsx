"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navGroupsUz, navGroupsRu, type NavGroup } from "@/content/navigation";
import MobileNav from "./MobileNav";
import { SlotIcon } from "@/components/shared/Icons";

function DropdownMenu({ group, isActive }: { group: NavGroup; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!group.dropdown) {
    return (
      <Link
        href={group.href ?? "#"}
        className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
          isActive
            ? "text-white bg-white/10"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`}
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
          isActive
            ? "text-white bg-white/10"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`}
        aria-expanded={open}
      >
        {group.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1.5 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 min-w-[200px] py-1.5 overflow-hidden">
          {group.dropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-pink-50 hover:text-[#ec4899] transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isRu = pathname === "/ru" || pathname.startsWith("/ru/");
  const navGroups = isRu ? navGroupsRu : navGroupsUz;
  const homeHref = isRu ? "/ru" : "/";

  // normalize trailing slash so slugMap lookups work regardless of browser URL
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // pages where UZ and RU slugs differ — map them explicitly
  const slugMap: Record<string, string> = {
    "/kazino-oyunlari": "/ru/igry-kazino",
    "/ru/igry-kazino": "/kazino-oyunlari",
    "/ru/kazino-oyunlari": "/kazino-oyunlari",
  };

  const uzHref = isRu
    ? (slugMap[cleanPath] ?? (cleanPath.replace(/^\/ru/, "") || "/"))
    : cleanPath;
  const ruHref = isRu
    ? cleanPath
    : (slugMap[cleanPath] ?? `/ru${cleanPath === "/" ? "" : cleanPath}`);

  const isGroupActive = (group: NavGroup) => {
    if (group.href && cleanPath === group.href) return true;
    return group.dropdown?.some((item) => cleanPath === item.href) ?? false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#16192b] border-b border-[#252944] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-4">
          {/* Logo */}
          <Link
            href={homeHref}
            className="flex items-center gap-2 font-black text-lg text-white hover:text-pink-300 transition-colors flex-shrink-0 group"
          >
            <div className="w-7 h-7 bg-[#ec4899] rounded-lg flex items-center justify-center group-hover:bg-[#db2777] transition-colors">
              <SlotIcon className="w-4 h-4 text-white" />
            </div>
            <span className="tracking-tight">Kazino<span className="text-[#ec4899]">Online</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1" aria-label="Main navigation">
            {navGroups.map((group) => (
              <DropdownMenu
                key={group.label}
                group={group}
                isActive={isGroupActive(group)}
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center bg-white/5 rounded-lg p-1 gap-0.5">
              <Link
                href={uzHref}
                className={`px-3 py-1 rounded-md transition-all text-xs font-bold uppercase tracking-wide ${
                  !isRu
                    ? "bg-[#ec4899] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                O&apos;z
              </Link>
              <Link
                href={ruHref}
                className={`px-3 py-1 rounded-md transition-all text-xs font-bold uppercase tracking-wide ${
                  isRu
                    ? "bg-[#ec4899] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                Ru
              </Link>
            </div>

            {/* Mobile menu */}
            <MobileNav navGroups={navGroups} uzHref={uzHref} ruHref={ruHref} isRu={isRu} />
          </div>
        </div>
      </div>
    </header>
  );
}
