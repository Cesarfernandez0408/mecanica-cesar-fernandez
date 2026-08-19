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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-black/50 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-red-600 animate-wa-pulse" aria-hidden />
      <MessageCircle className="relative h-7 w-7" aria-hidden />
    </a>
  );
}
