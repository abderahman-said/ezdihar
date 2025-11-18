"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[555] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
                 <Image width={161.17} height={70} src="/logo-footer.png" alt={"logo"} className="w-[121.17px]  object-contain" />
       

        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 border-4 border-[#530073]/20 border-t-[#530073] rounded-full animate-spin" />
        </div>

        {/* Loading Text */}
        <p className="text-[#530073]/60 text-sm">
          جاري التحميل...
        </p>
      </div>
    </div>
  );
}