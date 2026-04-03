"use client";

import { useEffect, useState } from "react";
interface TocSection {
  id: string;
  heading: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
  title?: string;
}

export default function TableOfContents({ sections, title = "Mundarija" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
      <h3 className="font-semibold text-blue-900 mb-3">{title}</h3>
      <ol className="space-y-1.5">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`flex items-center gap-2 text-sm transition-colors ${
                activeId === section.id
                  ? "text-blue-700 font-semibold"
                  : "text-blue-600 hover:text-blue-800"
              }`}
            >
              <span className="text-xs text-blue-400 font-mono w-5">
                {index + 1}.
              </span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
