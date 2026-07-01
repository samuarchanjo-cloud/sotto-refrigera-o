import { MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={siteData.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Sotto pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_16px_40px_rgba(16,185,129,0.38)] transition hover:scale-105 hover:bg-emerald-400"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </a>
  );
}
