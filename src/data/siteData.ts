import {
  BadgeCheck,
  Beer,
  Clock,
  Headset,
  IceCreamBowl,
  MonitorCheck,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Store,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";

export const siteData = {
  companyName: "Sotto Refrigeração e Climatização",
  whatsapp: "+55 21 97532-7971",
  whatsappLink:
    "https://wa.me/5521975327971?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Sotto%20Refrigera%C3%A7%C3%A3o%20e%20Climatiza%C3%A7%C3%A3o%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  address: "Estr. dos Palmares, 4155 - Jesuítas, Rio de Janeiro - RJ, 23575-275, Brasil",
  menu: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Profissionais", href: "#profissionais" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    image: "/images/hero/tecnico-expositor-bebidas.png",
    title: "Soluções em Refrigeração e Climatização para o seu negócio",
    highlightedWord: "Climatização",
    subtitle:
      "Soluções completas em refrigeração comercial para manter sua operação sempre no nível ideal de performance e eficiência.",
    highlights: [
      { label: "Equipamentos de qualidade", icon: Snowflake },
      { label: "Técnicos especializados", icon: Wrench },
      { label: "Atendimento personalizado", icon: ShieldCheck },
    ],
  },
  services: [
    {
      title: "Expositores de bebidas",
      description:
        "Instalação, manutenção e reparo para preservar bebidas na temperatura ideal e atrair mais vendas.",
      icon: Refrigerator,
    },
    {
      title: "Ilhas refrigeradas",
      description:
        "Soluções para conservar frios, ingredientes e produtos com máxima visibilidade e segurança.",
      icon: IceCreamBowl,
    },
    {
      title: "Balcões e freezers",
      description:
        "Manutenção e suporte para balcões e freezers que fazem diferença no dia a dia do negócio.",
      icon: Store,
    },
    {
      title: "Geladeiras",
      description: "Manutenção e reparo para garantir o funcionamento correto do equipamento.",
      icon: Refrigerator,
    },
    {
      title: "Geladeiras side by side",
      description:
        "Atendimento especializado para manter a eficiência e a vida útil do equipamento.",
      icon: MonitorCheck,
    },
    {
      title: "Cervejeiras",
      description: "Serviços especializados para manter bebidas sempre na temperatura ideal.",
      icon: Beer,
    },
  ],
  performance: {
    image: "/images/servicos/mercado-refrigerado.png",
    title: "Performance, conservação e eficiência.",
    text:
      "Equipamentos de alta performance e manutenção especializada para o seu negócio continuar funcionando sem parar.",
    features: [
      { label: "Conservação na temperatura ideal", icon: Snowflake },
      { label: "Desempenho e eficiência", icon: ShieldCheck },
      { label: "Atendimento especializado", icon: Wrench },
    ],
  },
  differentials: [
    {
      title: "Especialistas qualificados",
      description: "Equipe técnica com experiência em refrigeração comercial.",
      icon: Headset,
    },
    {
      title: "Agilidade no atendimento",
      description: "Respostas rápidas e soluções eficientes para o seu negócio.",
      icon: Clock,
    },
    {
      title: "Peças originais e de qualidade",
      description: "Componentes confiáveis para maior durabilidade.",
      icon: ShieldCheck,
    },
    {
      title: "Prevenção e manutenção",
      description: "Planos completos para evitar paradas e reduzir custos operacionais.",
      icon: BadgeCheck,
    },
    {
      title: "Alta tecnologia e eficiência",
      description: "Soluções modernas para maximizar resultados.",
      icon: Sparkles,
    },
    {
      title: "Atendimento personalizado",
      description: "Soluções sob medida para as necessidades do seu negócio.",
      icon: Wrench,
    },
  ],
  professionals: [
    {
      title: "Cervejeira",
      image: "/images/profissionais/cervejeira.png",
      alt: "Técnico revisando uma cervejeira comercial.",
    },
    {
      title: "Ilha refrigerada",
      image: "/images/profissionais/ilha-refrigerada.png",
      alt: "Técnico trabalhando em ilha refrigerada de mercado.",
    },
    {
      title: "Expositor de bebidas",
      image: "/images/profissionais/expositor-bebidas.png",
      alt: "Técnico fazendo manutenção em expositor vertical de bebidas.",
    },
    {
      title: "Geladeira",
      image: "/images/profissionais/geladeira.png",
      alt: "Técnico realizando manutenção em geladeira comum.",
    },
    {
      title: "Side by side",
      image: "/images/profissionais/side-by-side.png",
      alt: "Técnico consertando geladeira side by side.",
    },
  ],
  cta: {
    image: "/images/cta/ilha-refrigerada-comercial.png",
    title: "Seu negócio não pode parar.",
    highlight: "A gente mantém tudo gelando.",
    text:
      "Fale com a Sotto e tenha a tranquilidade de contar com especialistas em refrigeração comercial sempre que precisar.",
    badges: [
      { label: "Atendimento rápido em toda a região", icon: Snowflake },
      { label: "Serviços com garantia e qualidade", icon: ShieldCheck },
      { label: "Soluções completas para o seu negócio", icon: ThermometerSnowflake },
    ],
  },
  footerServices:
    "Expositores de bebidas • Ilhas refrigeradas • Balcões e freezers • Geladeiras • Side by side • Cervejeiras • Refrigeração comercial • Climatização",
};
