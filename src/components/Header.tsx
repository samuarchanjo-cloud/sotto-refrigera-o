import { ClipboardCheck, Snowflake } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/86 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#inicio" className="flex items-center gap-3 text-white" aria-label="Ir para o início">
          <Snowflake className="h-9 w-9 text-ice" strokeWidth={1.7} />
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-[0.08em]">SOTTO</span>
            <span className="block text-[11px] font-semibold text-slate-300">Refrigeração e Climatização</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-200 lg:flex">
          {siteData.menu.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ice">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteData.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-xs font-bold uppercase text-white transition hover:border-ice hover:text-ice md:flex"
        >
          <ClipboardCheck className="h-4 w-4" />
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
