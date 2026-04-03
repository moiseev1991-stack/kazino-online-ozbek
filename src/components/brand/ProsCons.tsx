interface ProsConsProps {
  pros: string[];
  cons: string[];
  locale?: "uz" | "ru";
}

export default function ProsCons({ pros, cons, locale = "uz" }: ProsConsProps) {
  const prosLabel = locale === "ru" ? "Преимущества" : "Afzalliklari";
  const consLabel = locale === "ru" ? "Недостатки" : "Kamchiliklari";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {/* Pros */}
      <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-sm">
        <div className="bg-emerald-500 px-5 py-3 flex items-center gap-2">
          <span className="text-lg leading-none">✓</span>
          <h3 className="font-bold text-white text-sm tracking-wide uppercase">{prosLabel}</h3>
        </div>
        <div className="bg-white px-5 py-4">
          <ul className="space-y-2.5">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 font-bold text-xs leading-none">
                  ✓
                </span>
                <span className="text-sm text-gray-700 leading-snug">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cons */}
      <div className="rounded-2xl overflow-hidden border border-rose-200 shadow-sm">
        <div className="bg-rose-500 px-5 py-3 flex items-center gap-2">
          <span className="text-lg leading-none text-white font-bold">✕</span>
          <h3 className="font-bold text-white text-sm tracking-wide uppercase">{consLabel}</h3>
        </div>
        <div className="bg-white px-5 py-4">
          <ul className="space-y-2.5">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-500 font-bold text-xs leading-none">
                  ✕
                </span>
                <span className="text-sm text-gray-700 leading-snug">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
