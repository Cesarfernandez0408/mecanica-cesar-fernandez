import Image from "next/image";
import Link from "next/link";
import { BUSINESS_FULL_NAME } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  variant?: "full" | "compact";
  imageClassName?: string;
}

const DEFAULT_IMAGE_CLASSES: Record<NonNullable<LogoProps["variant"]>, string> = {
  full: "h-12 w-auto object-contain md:h-14",
  compact: "h-10 w-10 object-contain md:h-11 md:w-11",
};

export default function Logo({ className = "", variant = "full", imageClassName }: LogoProps) {
  const isCompact = variant === "compact";

  return (
    <Link href="#" className={`flex items-center ${className}`} aria-label={BUSINESS_FULL_NAME}>
      <Image
        src={isCompact ? "/logo.png" : "/logo-completo.png"}
        alt={BUSINESS_FULL_NAME}
        width={isCompact ? 44 : 200}
        height={isCompact ? 44 : 200}
        priority
        className={imageClassName ?? DEFAULT_IMAGE_CLASSES[variant]}
      />
    </Link>
  );
}
