import "./i18n";

import Navbar from "./components/Navbar";
import LuxeDivider from "./components/LuxeDivider";
import BackToTop from "./components/BackToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Hero from "./sections/Hero";
import Rooms from "./sections/Rooms";
import Amenities from "./sections/Amenities";
import Location from "./sections/Location";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* Fondo principal sin afectar al contexto del scroll */}
      <div
        className="
          fixed inset-0 -z-10
          bg-[#050506]
          bg-[radial-gradient(circle_at_30%_10%,rgba(255,225,160,0.07),transparent_70%)]
          from-black/90 via-black/92 to-black/96 bg-gradient-to-b
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          bg-blend-soft-light
          bg-cover bg-center
        "
      ></div>

      {/* Contenido normal */}
      <div className="relative text-slate-50 min-h-screen overflow-x-hidden">
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <LuxeDivider />
          <Rooms />
          <LuxeDivider />
          <Amenities />
          <LuxeDivider />
          <Location />
          <LuxeDivider />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* ✅ Botones flotantes por fuera del contexto visual */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-end">
        <WhatsAppFloat />
        <BackToTop />
      </div>
    </>
  );
}
