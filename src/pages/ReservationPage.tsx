import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Calendar, Users, MessageSquare } from "lucide-react";
import logo from "../assets/logo/logo.png";

export default function ReservationPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const sendToWhatsApp = () => {
    const phone = "50670277792";
    const text = `
 *Reserva Pura Vida Hotel*

Nombre: *${form.name}*
Email: ${form.email}

Check-In: ${form.checkIn}
Check-Out: ${form.checkOut}
Huéspedes: ${form.guests}

Mensaje o Consulta:
${form.message || "—"}

----------------------------------
Enviado desde la página web 🌐
    `;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
   <div
  className="
    min-h-screen pt-28 pb-20 text-white relative overflow-hidden
    bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')]
    bg-cover bg-center bg-fixed
    before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.6),rgba(0,0,0,0.85))] before:backdrop-blur-[2px] before:z-0
  "
>


      {/* LUXURY LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,230,180,0.07),transparent_60%)] z-0"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <Link to="/" className="flex flex-col items-center mb-6">
          <img src={logo} alt="Pura Vida Hotel" className="h-16 drop-shadow-2xl" />
          <span className="mt-2 font-[Cormorant_Garamond] italic text-3xl text-[#d4b66a] tracking-wide">
            Pura Vida Hotel
          </span>
        </Link>

        <h1 className="font-[Lora] text-5xl md:text-6xl text-[#fdf8ee]">
          {t("reservation.title")}
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto mt-4 font-[Manrope] leading-relaxed">
          {t("reservation.subtitle")}
        </p>
      </motion.div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="
          max-w-2xl mx-auto relative z-10 p-10 rounded-3xl
          bg-white/5 backdrop-blur-2xl border border-white/10 
          shadow-[0_0_60px_rgba(255,255,255,0.05)]
          hover:shadow-[0_0_80px_rgba(212,182,106,0.1)] transition-all duration-700
        "
      >
        {/* NAME */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
            <User size={18} /> {t("reservation.name")}
          </label>
          <input
            type="text"
            placeholder={t("reservation.namePh")!}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="
              w-full mt-2 p-3 rounded-xl bg-black/40 border border-[#d4b66a]/30
              text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a]
              focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none
            "
          />
        </div>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
            <Mail size={18} /> {t("reservation.email")}
          </label>
          <input
            type="email"
            placeholder={t("reservation.emailPh")!}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="
              w-full mt-2 p-3 rounded-xl bg-black/40 border border-[#d4b66a]/30
              text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a]
              focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none
            "
          />
        </div>

        {/* DATES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
              <Calendar size={18} /> {t("reservation.checkIn")}
            </label>
            <input
              type="date"
              value={form.checkIn}
              title={t("reservation.checkIn")!}
              onChange={(e) => update("checkIn", e.target.value)}
              className="
                w-full mt-2 p-3 rounded-xl bg-black/40 border border-[#d4b66a]/30
                text-white focus:ring-2 focus:ring-[#d4b66a]
                focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none
              "
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
              <Calendar size={18} /> {t("reservation.checkOut")}
            </label>
            <input
              type="date"
              value={form.checkOut}
              title={t("reservation.checkOut")!}
              onChange={(e) => update("checkOut", e.target.value)}
              className="
                w-full mt-2 p-3 rounded-xl bg-black/40 border border-[#d4b66a]/30
                text-white focus:ring-2 focus:ring-[#d4b66a]
                focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none
              "
            />
          </div>
        </div>

        {/* GUESTS */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
            <Users size={18} /> {t("reservation.guests")}
          </label>
          <select
            title={t("reservation.guests")!}
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className="
              w-full mt-2 p-3 rounded-xl bg-black/40 border border-[#d4b66a]/30
              text-white focus:ring-2 focus:ring-[#d4b66a]
              focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none
            "
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="mb-10">
          <label className="flex items-center gap-2 text-[#d4b66a] text-lg font-[Cormorant_Garamond]">
            <MessageSquare size={18} /> {t("reservation.message")}
          </label>
          <textarea
            placeholder={t("reservation.messagePh")!}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="
              w-full mt-2 p-3 h-28 rounded-xl bg-black/40 border border-[#d4b66a]/30
              text-white placeholder-slate-400 focus:ring-2 focus:ring-[#d4b66a]
              focus:shadow-[0_0_12px_rgba(212,182,106,0.4)] outline-none resize-none
            "
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={sendToWhatsApp}
          className="
            w-full py-4 rounded-full bg-gradient-to-r from-[#d4b66a] to-[#b89f5d]
            text-black text-lg font-semibold tracking-wide
            shadow-[0_0_25px_rgba(212,182,106,0.35)]
            hover:shadow-[0_0_40px_rgba(212,182,106,0.5)]
            transition-all
          "
        >
          {t("reservation.button")}
        </motion.button>

        <Link
          to="/"
          className="block text-center mt-6 text-[#d4b66a] hover:underline"
        >
          {t("reservation.back")}
        </Link>
      </motion.div>

      {/* FEEDBACK TOAST */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="
              fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3
              bg-[#d4b66a] text-black font-medium rounded-full
              shadow-lg z-50
            "
          >
            ✨ {t("reservation.sent")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
