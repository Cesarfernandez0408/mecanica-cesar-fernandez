import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export default function FloatingWhatsApp() {
  const href = buildWhatsAppUrl("Hola, quiero más información sobre sus servicios.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg shadow-black/50 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-red-600 animate-wa-pulse" aria-hidden />
      <Image
        src="/logo.png"
        alt=""
        width={56}
        height={56}
        className="relative h-full w-full rounded-full object-cover"
      />
      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-red-600">
        <MessageCircle className="h-3.5 w-3.5 text-white" aria-hidden />
      </span>
    </a>
  );
}
