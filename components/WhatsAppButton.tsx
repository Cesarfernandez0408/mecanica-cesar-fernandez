import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  showIcon?: boolean;
  onClick?: () => void;
}

const VARIANT_CLASSES: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary: "bg-red-600 text-white hover:bg-red-700",
  outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  ghost: "text-white hover:text-red-500",
};

export default function WhatsAppButton({
  message,
  phone,
  children,
  className = "",
  variant = "primary",
  showIcon = true,
  onClick,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message, phone);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 font-semibold uppercase tracking-wide transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />}
      {children ?? "WhatsApp"}
    </a>
  );
}
