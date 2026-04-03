import type { Brand } from "@/content/brands";
import { formatRating } from "@/lib/utils";
import { SlotIcon, StarFilledIcon, StarIcon, CalendarIcon, ShieldCheckIcon, GiftIcon } from "@/components/shared/Icons";
import CtaButton from "@/components/shared/CtaButton";

interface BrandReviewHeroProps {
  brand: Brand;
  locale?: "uz" | "ru";
}

export default function BrandReviewHero({ brand, locale = "uz" }: BrandReviewHeroProps) {
  const bonusLabel = locale === "ru" ? "Приветственный бонус" : "Xush kelibsiz bonusi";
  const ctaLabel = locale === "ru" ? "Получить бонус →" : "Bonus olish →";
  const estLabel = locale === "ru" ? "Основан" : "Tashkil etilgan";
  const licLabel = locale === "ru" ? "Лицензия" : "Litsenziya";
  const verifiedLabel = locale === "ru" ? "Проверено редакцией" : "Tahririyat tomonidan tasdiqlangan";

  const stars = Math.round(brand.rating / 2);
  const ratingPct = (brand.rating / 10) * 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-[#ec4899] to-amber-400" />

      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 bg-gray-50 border-2 border-gray-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
              {brand.logo && !brand.logo.endsWith("/") ? (
                <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain p-2" />
              ) : (
                <SlotIcon className="w-12 h-12 text-gray-300" />
              )}
            </div>
            {/* Verified badge */}
            <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-3xl font-extrabold text-gray-900">{brand.name}</h1>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full flex items-center gap-1">
                <ShieldCheckIcon className="w-3 h-3" /> {verifiedLabel}
              </span>
            </div>

            {/* Stars + score */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  star <= stars ? (
                    <StarFilledIcon key={star} className="w-5 h-5 text-amber-400" />
                  ) : (
                    <StarIcon key={star} className="w-5 h-5 text-gray-200" />
                  )
                ))}
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-gray-900 leading-none">{formatRating(brand.rating)}</span>
                <span className="text-gray-400 font-medium mb-0.5">/10</span>
              </div>
            </div>

            {/* Rating bar */}
            <div className="w-full max-w-xs bg-gray-100 rounded-full h-2 mb-3 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-[#ec4899] transition-all duration-500"
                style={{ width: `${ratingPct}%` }}
              />
            </div>

            {brand.tags && brand.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {brand.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bonus + CTA */}
          <div className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[240px]">
            <div className="bg-gradient-to-br from-amber-50 to-pink-50 border border-amber-200 rounded-2xl p-4 text-center shadow-sm">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <GiftIcon className="w-4 h-4 text-[#ec4899]" />
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{bonusLabel}</p>
              </div>
              <p className="text-xl font-extrabold text-[#ec4899] leading-tight">{brand.bonus}</p>
            </div>
            <CtaButton
              href={`/go/${brand.slug}`}
              label={ctaLabel}
              variant="cta"
              size="lg"
              className="w-full text-center"
              external
            />
          </div>
        </div>

        {(brand.established || brand.licenseInfo) && (
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
            {brand.established && (
              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{estLabel}: {brand.established}</span>
              </span>
            )}
            {brand.licenseInfo && (
              <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">{licLabel}: {brand.licenseInfo}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
