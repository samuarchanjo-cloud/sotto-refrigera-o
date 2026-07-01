import { ClipboardCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Hero() {
  const parts = siteData.hero.title.split(siteData.hero.highlightedWord);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-midnight pt-20 text-white">
      <img
        src={siteData.hero.image}
        alt="Técnico da Sotto fazendo manutenção em expositor de bebidas comercial."
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div className="image-overlay absolute inset-0" />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-80px)] items-center py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-md border border-ice/30 bg-ice/10 px-3 py-2 text-sm font-semibold text-ice">
            Refrigeração comercial para negócios que não podem parar
          </p>
          <h1 className="text-4xl font-black leading-[1.06] tracking-normal sm:text-5xl lg:text-6xl">
            {parts[0]}
            <span className="text-ice">{siteData.hero.highlightedWord}</span>
            {parts[1]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{siteData.hero.subtitle}</p>

          <div className="mt-9 max-w-xl rounded-lg border border-ice/30 bg-midnight/45 p-4 shadow-glow backdrop-blur-sm">
            <div className="flex items-center gap-3 text-base font-black text-white">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ice/15 text-ice">
                <ClipboardCheck className="h-5 w-5" />
              </span>
              <span>{siteData.hero.specialty}</span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {siteData.hero.highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 text-sm font-semibold text-slate-100">
                <Icon className="h-8 w-8 shrink-0 text-ice" strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-4 text-sm font-black uppercase text-white transition hover:border-ice hover:text-ice"
            >
              <Headphones className="h-5 w-5" />
              Falar com um especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
