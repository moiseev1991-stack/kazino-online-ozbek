import Link from "next/link";
import type { Brand } from "@/content/brands";
import { formatRating } from "@/lib/utils";
import { SlotIcon, StarFilledIcon, StarIcon, GiftIcon, ShieldCheckIcon } from "@/components/shared/Icons";

interface TopCasinoCardProps {
  brand: Brand;
  rank: number;
  locale?: "uz" | "ru";
}

const rankMeta = (rank: number) => {
  if (rank === 1) return { bg: "rank-gold" };
  if (rank === 2) return { bg: "rank-silver" };
  if (rank === 3) return { bg: "rank-bronze" };
  return { bg: "rank-default" };
};

export default function TopCasinoCard({ brand, rank, locale = "uz" }: TopCasinoCardProps) {
  const reviewHref = locale === "ru" ? `/ru/casino/${brand.slug}` : `/casino/${brand.slug}`;
  const goHref = `/go/${brand.slug}`;
  const reviewLabel = locale === "ru" ? "Обзор" : "Sharh";
  const ctaLabel = locale === "ru" ? "Играть →" : "O'ynash →";
  const verifiedLabel = locale === "ru" ? "Проверено" : "Tasdiqlangan";

  const stars = Math.round(brand.rating / 2);
  const { bg } = rankMeta(rank);

  return (
    <article
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden ${
        rank === 1 ? "featured-card border-amber-200 ring-1 ring-amber-200" : "hover:border-pink-200"
      }`}
    >
      <div className="p-3 sm:p-4">
        {/* ── Top row: rank + logo + name/stars ── */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3">
          {/* Rank badge */}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 text-sm shadow-sm ${bg}`}
          >
            {rank}
          </div>

          {/* Logo */}
          <div className={`w-20 h-16 sm:w-28 sm:h-20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white border-2 ${
            rank === 1 ? "border-amber-200" : "border-gray-100"
          }`}>
            {brand.logo && !brand.logo.endsWith("/") ? (
              <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-1.5" />
            ) : (
              <SlotIcon className="w-8 h-8 text-gray-300" />
            )}
          </div>

          {/* Name + verified + stars */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <Link
                href={reviewHref}
                className="font-bold text-sm sm:text-base text-gray-900 hover:text-[#ec4899] transition-colors leading-tight"
              >
                {brand.name}
              </Link>
              {rank <= 3 && (
                <span className="inline-flex flex-shrink-0 items-center gap-0.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                  <ShieldCheckIcon className="w-3 h-3" /> {verifiedLabel}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) =>
                  s <= stars ? (
                    <StarFilledIcon key={s} className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <StarIcon key={s} className="w-3.5 h-3.5 text-gray-200" />
                  )
                )}
              </div>
              <span className="text-xs font-bold text-gray-600">{formatRating(brand.rating)}/10</span>
            </div>
          </div>
        </div>

        {/* ── Bottom row: bonus + CTA (full width) ── */}
        <div className="flex items-center justify-between gap-2">
          <div className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1.5 rounded-lg min-w-0 ${
            rank === 1
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-pink-50 text-[#ec4899] border border-pink-100"
          }`}>
            <GiftIcon className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{brand.bonus}</span>
          </div>

          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <Link
              href={goHref}
              className="cta-glow bg-[#ec4899] hover:bg-[#db2777] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap shadow-md"
            >
              {ctaLabel}
            </Link>
            <Link
              href={reviewHref}
              className="text-xs text-gray-400 hover:text-[#ec4899] transition-colors px-1 whitespace-nowrap underline-offset-2 hover:underline"
            >
              {reviewLabel}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
