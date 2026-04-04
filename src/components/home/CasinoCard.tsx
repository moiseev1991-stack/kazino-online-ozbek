import Link from "next/link";
import type { Brand } from "@/content/brands";
import { formatRating } from "@/lib/utils";
import { SlotIcon, StarFilledIcon, StarIcon, GiftIcon, ShieldCheckIcon } from "@/components/shared/Icons";

interface CasinoCardProps {
  brand: Brand;
  rank?: number;
  locale?: "uz" | "ru";
}

export default function CasinoCard({ brand, rank, locale = "uz" }: CasinoCardProps) {
  const reviewHref = locale === "ru" ? `/ru/${brand.slug}` : `/${brand.slug}`;
  const goHref = `/go/${brand.slug}`;
  const reviewLabel = locale === "ru" ? "Читать обзор" : "Sharh o'qish";
  const ctaLabel = locale === "ru" ? "Играть сейчас" : "O'ynash";

  const stars = Math.round(brand.rating / 2);
  const isTop = rank !== undefined && rank <= 3;

  return (
    <article
      className={`bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden ${
        rank === 1
          ? "featured-card border-amber-200 ring-1 ring-amber-200"
          : "border-gray-200 hover:border-pink-200"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5">
        {/* Rank */}
        {rank !== undefined && (
          <div
            className={`hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-white text-sm font-black flex-shrink-0 shadow-sm ${
              rank === 1 ? "rank-gold" : rank === 2 ? "rank-silver" : rank === 3 ? "rank-bronze" : "rank-default"
            }`}
          >
            {rank}
          </div>
        )}

        {/* Logo */}
        <div className={`w-16 h-14 sm:w-20 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white border-2 ${
          rank === 1 ? "border-amber-200" : "border-gray-100"
        }`}>
          {brand.logo && !brand.logo.endsWith("/") ? (
            <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-1.5" />
          ) : (
            <SlotIcon className="w-9 h-9 text-gray-300" />
          )}
        </div>

        {/* Brand info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Link
              href={reviewHref}
              className="font-bold text-lg text-gray-900 hover:text-[#ec4899] transition-colors leading-tight"
            >
              {brand.name}
            </Link>
            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-200">
              {formatRating(brand.rating)}/10
            </span>
            {isTop && (
              <span className="hidden sm:inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                <ShieldCheckIcon className="w-3 h-3" />
                {locale === "ru" ? "Проверено" : "Tasdiqlangan"}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 mb-2.5">
            {[1, 2, 3, 4, 5].map((s) =>
              s <= stars ? (
                <StarFilledIcon key={s} className="w-4 h-4 text-amber-400" />
              ) : (
                <StarIcon key={s} className="w-4 h-4 text-gray-200" />
              )
            )}
          </div>

          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${
            rank === 1
              ? "bg-amber-50 border border-amber-200 text-amber-700"
              : "bg-pink-50 border border-pink-100 text-[#ec4899]"
          }`}>
            <GiftIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-sm font-bold">{brand.bonus}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <Link
            href={goHref}
            className="cta-glow bg-[#ec4899] hover:bg-[#db2777] text-white font-bold text-sm px-5 sm:px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap shadow-md"
          >
            {ctaLabel} →
          </Link>
          <Link
            href={reviewHref}
            className="text-xs text-gray-400 hover:text-[#ec4899] transition-colors whitespace-nowrap underline-offset-2 hover:underline"
          >
            {reviewLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
