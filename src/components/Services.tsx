import AnimatedSection from "./AnimatedSection";
import { siteData } from "../data/siteData";

export default function Services() {
  return (
    <AnimatedSection id="servicos" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-black text-midnight sm:text-4xl">Nossos Serviços</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-soft">
              <Icon className="mx-auto h-14 w-14 text-navy" strokeWidth={1.45} />
              <h3 className="mt-6 text-xl font-black leading-tight text-midnight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
