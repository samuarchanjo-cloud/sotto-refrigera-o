import CTA from "./components/CTA";
import Differentials from "./components/Differentials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Performance from "./components/Performance";
import Professionals from "./components/Professionals";
import Services from "./components/Services";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-midnight">
      <Header />
      <main>
        <Hero />
        <Services />
        <Performance />
        <Differentials />
        <Professionals />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
