import Link from "next/link";
import { DiceIcon } from "@/components/shared/Icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mb-6"><DiceIcon className="w-20 h-20 text-gray-300 mx-auto" /></div>
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Sahifa topilmadi
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        ← Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
