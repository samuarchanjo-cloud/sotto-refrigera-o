import { MapPin, MessageCircle, Snowflake } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#06101f] py-12 text-slate-300">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-white">
            <Snowflake className="h-9 w-9 text-ice" strokeWidth={1.6} />
            <strong className="text-lg">{siteData.companyName}</strong>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase text-white">Serviços</h3>
          <p className="mt-3 text-sm leading-7">{siteData.footerServices}</p>
        </div>
        <div className="space-y-4">
          <a
            href={siteData.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 transition hover:text-ice"
          >
            <MessageCircle className="h-5 w-5 text-ice" />
            WhatsApp {siteData.whatsapp}
          </a>
          <p className="flex gap-3 text-sm leading-6">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-ice" />
            {siteData.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
