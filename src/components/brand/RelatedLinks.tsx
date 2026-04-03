import Link from "next/link";
import Image from "next/image";
import type { Brand } from "@/content/brands";
import { formatRating } from "@/lib/utils";

interface RelatedLinksProps {
  brands: Brand[];
  currentSlug?: string;
  locale?: "uz" | "ru";
}

export default function RelatedLinks({ brands, currentSlug, locale = "uz" }: RelatedLinksProps) {
  const related = (currentSlug ? brands.filter((b) => b.slug !== currentSlug) : brands).slice(0, 5);

  if (related.length === 0) return null;

  const heading = locale === "ru" ? "Другие казино" : "Boshqa kazinolar";
  const ctaLabel = locale === "ru" ? "Обзор" : "Sharh";
  const hrefBase = locale === "ru" ? "/ru/casino" : "/casino";

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map((brand) => (
          <Link
            key={brand.slug}
            href={`${hrefBase}/${brand.slug}`}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-pink-300 transition-all group flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <span className="text-xl">🎰</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm truncate">
                {brand.name}
              </p>
              <p className="text-xs text-amber-500 font-bold">{formatRating(brand.rating)}/10</p>
              <p className="text-xs text-gray-500 truncate">{brand.bonus}</p>
            </div>
            <span className="text-xs text-pink-500 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {ctaLabel} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
