import AnimatedSection from "./AnimatedSection";
import { siteData } from "../data/siteData";

export default function Professionals() {
  return (
    <AnimatedSection id="profissionais" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-black text-midnight sm:text-4xl">Profissionais em ação</h2>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
          {siteData.professionals.map((item) => (
            <article key={item.title} className="min-w-[245px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
              <img src={item.image} alt={item.alt} className="h-72 w-full object-cover object-center" />
              <h3 className="px-4 py-5 text-center text-lg font-black text-midnight">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
