import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaWhatsapp, FaGlobeAmericas } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  // Scroll suave hacia las secciones (si no estás en "/")
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Secciones internas + link externo
  const navLinks = [
    { id: 1, name: t("footer.home"), section: "inicio" },
    { id: 2, name: t("footer.rooms"), section: "rooms" },
    { id: 3, name: t("footer.gallery"), external: "/gallery" },
    { id: 4, name: t("footer.contact"), section: "contact" },
  ];

  return (
    <footer className="relative bg-[#0b0b0d] text-slate-300 border-t border-[#d4b66a]/20 overflow-hidden">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4b66a]/40 to-transparent animate-[shimmer_8s_linear_infinite]" />

      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,182,106,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center gap-10 text-center">
        {/* Nombre del hotel */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[Cormorant_Garamond] text-4xl text-[#d4b66a] tracking-wide"
        >
          Pura Vida Hotel
        </motion.h2>

        {/* Enlaces rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider font-medium"
        >
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.id}
                href={link.external}
                className="hover:text-[#d4b66a] transition-all duration-300"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.section!)}
                className="hover:text-[#d4b66a] transition-all duration-300"
              >
                {link.name}
              </button>
            )
          )}
        </motion.div>

        {/* Línea dorada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="origin-center w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4b66a] to-transparent"
        />

        {/* Sección Pura Vida Tech */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            {t("footer.invite")}
          </p>

          <a
            href="https://www.puravidawebs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#d4b66a] to-[#bfa45a] text-black font-semibold hover:from-[#c9b177] hover:to-[#d4b66a] shadow-md transition-all"
            title="Visita Pura Vida Tech"
          >
            <FaGlobeAmericas aria-hidden="true" />
            {t("footer.visit")}
          </a>

          <p className="text-sm text-slate-400">
            🌴 +506 7027 7792 | puravidatech@yahoo.com
          </p>

          {/* Íconos sociales */}
          <div className="flex gap-5 mt-2 text-lg">
            <a
              href="https://wa.me/50670277792"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4b66a] transition-all"
              title="WhatsApp Pura Vida Tech"
              aria-label="WhatsApp Pura Vida Tech"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/puravidawebs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4b66a] transition-all"
              title="Instagram Pura Vida Tech"
              aria-label="Instagram Pura Vida Tech"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Firma final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-xs text-slate-500"
        >
          <p>
            © {new Date().getFullYear()} Pura Vida Tech. {t("footer.rights")}
          </p>
          <p className="italic text-slate-600 mt-1">
            {t("footer.madeWith")} 💛 Costa Rica
          </p>
        </motion.div>
      </div>

      {/* Animación dorada suave */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </footer>
  );
}
