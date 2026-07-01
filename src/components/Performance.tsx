import AnimatedSection from "./AnimatedSection";
import { siteData } from "../data/siteData";

export default function Performance() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-midnight py-24 text-white">
      <img
        src={siteData.performance.image}
        alt="Ambiente comercial com ilhas refrigeradas e expositores de bebidas."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 image-overlay" />
      <div className="section-shell relative z-10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">{siteData.performance.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">{siteData.performance.text}</p>
        </div>
        <div className="mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {siteData.performance.features.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <Icon className="h-9 w-9 shrink-0 text-ice" strokeWidth={1.5} />
              <span className="text-sm font-bold text-slate-100">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
