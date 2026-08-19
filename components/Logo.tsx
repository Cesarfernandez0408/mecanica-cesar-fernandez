"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_FULL_NAME, BUSINESS_NAME, BUSINESS_TAGLINE } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      href="#"
      className={`flex items-center gap-3 ${className}`}
      aria-label={BUSINESS_FULL_NAME}
    >
      {!imageFailed ? (
        // Reemplaza /public/logo.png con el logo real del taller cuando esté disponible.
        <Image
          src="/logo.png"
          alt={BUSINESS_FULL_NAME}
          width={44}
          height={44}
          priority
          className="h-10 w-10 shrink-0 rounded-full object-cover md:h-11 md:w-11"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-red-600 font-heading text-base font-semibold tracking-wide text-white md:h-11 md:w-11 md:text-lg"
          aria-hidden
        >
          CF
        </span>
      )}
      {showText && (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="font-heading text-lg uppercase tracking-wide text-white md:text-xl">
            {BUSINESS_NAME}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 md:text-xs">
            {BUSINESS_TAGLINE}
          </span>
        </span>
      )}
    </Link>
  );
}
