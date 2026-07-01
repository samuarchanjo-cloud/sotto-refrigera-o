import { MessageCircle, ClipboardCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteData } from "../data/siteData";

export default function CTA() {
  return (
    <AnimatedSection id="contato" className="relative overflow-hidden bg-midnight py-20 text-white sm:py-24">
      <img
        src={siteData.cta.image}
        alt="Ilha refrigerada comercial iluminada em ambiente de mercado."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 cta-overlay" />
      <div className="section-shell relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            {siteData.cta.title}
            <span className="mt-2 block text-ice">{siteData.cta.highlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">{siteData.cta.text}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-4 text-sm font-black uppercase text-white shadow-glow transition hover:bg-blue-500"
            >
              <ClipboardCheck className="h-5 w-5" />
              Solicitar orçamento
            </a>
            <a
              href={siteData.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ice/50 px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-ice hover:text-midnight"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {siteData.cta.badges.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Icon className="h-8 w-8 shrink-0 text-ice" strokeWidth={1.5} />
              <span className="text-sm font-bold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
