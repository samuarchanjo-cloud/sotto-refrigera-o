import AnimatedSection from "./AnimatedSection";
import { siteData } from "../data/siteData";

export default function Differentials() {
  return (
    <AnimatedSection id="diferenciais" className="bg-midnight py-20 text-white sm:py-24">
      <div className="section-shell">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Por que escolher a Sotto?</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {siteData.differentials.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-center">
              <Icon className="mx-auto h-12 w-12 text-ice" strokeWidth={1.5} />
              <h3 className="mt-5 text-base font-black leading-tight">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
