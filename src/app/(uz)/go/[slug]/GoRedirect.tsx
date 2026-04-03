"use client";

import { useEffect } from "react";

export default function GoRedirect({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#16192b]">
      <div className="text-center text-white">
        <div className="w-8 h-8 border-2 border-[#ec4899] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400 text-sm">Yo&apos;naltirilmoqda...</p>
      </div>
    </div>
  );
}
