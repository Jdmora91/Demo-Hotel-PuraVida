import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import atardecer from "../assets/contact/atardecer.mp4";
import lobby1 from "../assets/contact/lobby1.avif";
import balcon from "../assets/contact/balcon.avif";
import relax from "../assets/contact/relax.avif";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const sendToWhatsApp = () => {
    const phone = "50670277792";
    const text = `
🌴 *Pura Vida Hotel – Contacto / Reserva*
----------------------------------
👤 *${form.name}*
📧 ${form.email}

📝 Mensaje:
${form.message || "—"}

----------------------------------
Enviado desde la web 🌐
    `;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden"
    >
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src={atardecer}
      />
      {/* Filtro dorado suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.45),rgba(0,0,0,0.9))] backdrop-blur-[2px]" />

      {/* 🌅 Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        {/* Izquierda - Información */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-[Lora] text-5xl text-[#d4b66a] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-300 mb-6 max-w-md">
            {t("contact.subtitle")}
          </p>

          <div className="space-y-3 text-slate-200">
            <p>📍 Bahía Ballena, Osa, Puntarenas, Costa Rica</p>
            <p>📧 info@puravidahotel.com</p>
            <p>📱 +506 7027 7792</p>
          </div>

          {/* Mini galería */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[lobby1, balcon, relax].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Pura Vida Hotel"
                className="rounded-2xl h-24 w-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
              />
            ))}
          </div>
        </motion.div>

        {/* Derecha - Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-[#d4b66a]/20 shadow-[0_0_40px_rgba(212,182,106,0.15)] p-8"
        >
          <h3 className="font-[Cormorant_Garamond] text-3xl text-[#d4b66a] mb-4 text-center">
            {t("contact.formTitle")}
          </h3>

          {/* Nombre */}
          <label
            htmlFor="name"
            className="block text-[#d4b66a] font-[Cormorant_Garamond] text-lg mb-1"
          >
            {t("contact.name")}
          </label>
          <input
            id="name"
            type="text"
            placeholder={t("contact.namePh")!}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full mb-4 p-3 rounded-xl bg-black/30 border border-[#d4b66a]/30 text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a] focus:outline-none"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-[#d4b66a] font-[Cormorant_Garamond] text-lg mb-1"
          >
            {t("contact.email")}
          </label>
          <input
            id="email"
            type="email"
            placeholder={t("contact.emailPh")!}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full mb-4 p-3 rounded-xl bg-black/30 border border-[#d4b66a]/30 text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a] focus:outline-none"
          />

          {/* Mensaje */}
          <label
            htmlFor="message"
            className="block text-[#d4b66a] font-[Cormorant_Garamond] text-lg mb-1"
          >
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            placeholder={t("contact.messagePh")!}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full h-28 mb-6 p-3 rounded-xl bg-black/30 border border-[#d4b66a]/30 text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a] focus:outline-none resize-none"
          ></textarea>

          <button
            onClick={sendToWhatsApp}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#d4b66a] to-[#bfa45a] text-black font-semibold shadow-lg hover:from-[#c9b177] hover:to-[#d4b66a] transition-all"
          >
            {t("contact.button")}
          </button>

          <p className="text-center text-slate-400 mt-4 text-sm">
            {t("contact.footerText")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
