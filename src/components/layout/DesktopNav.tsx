"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/content/navigation";

interface DesktopNavProps {
  links: NavLink[];
}

export default function DesktopNav({ links }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-0.5" : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
