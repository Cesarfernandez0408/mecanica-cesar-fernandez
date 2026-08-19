"use client";

import Image from "next/image";
import { useMenu } from "@/lib/menu-context";
import { BUSINESS_FULL_NAME } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  variant?: "full" | "compact";
  imageClassName?: string;
}

const DEFAULT_IMAGE_CLASSES: Record<NonNullable<LogoProps["variant"]>, string> = {
  full: "max-h-10 w-auto object-contain md:max-h-12",
  compact: "h-10 w-10 object-contain md:h-11 md:w-11",
};

export default function Logo({ className = "", variant = "full", imageClassName }: LogoProps) {
  const isCompact = variant === "compact";
  const { setMenuOpen } = useMenu();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      className={`flex items-center ${className}`}
      aria-label={`${BUSINESS_FULL_NAME} — volver al inicio`}
    >
      <Image
        src={isCompact ? "/logo.png" : "/logo-completo.png"}
        alt={BUSINESS_FULL_NAME}
        width={isCompact ? 44 : 200}
        height={isCompact ? 44 : 200}
        priority
        className={imageClassName ?? DEFAULT_IMAGE_CLASSES[variant]}
      />
    </a>
  );
}
