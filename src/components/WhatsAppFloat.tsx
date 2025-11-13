import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "50670277792";
  const message = encodeURIComponent("¡Hola! Me gustaría reservar una habitación en Pura Vida Hotel 🌴");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp con Pura Vida Hotel"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 10 }}
      className="
        fixed bottom-8 right-30 z-[9999]
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-gradient-to-br from-[#25D366] to-[#128C7E]
        text-white text-3xl
        shadow-[0_0_35px_rgba(37,211,102,0.5),inset_0_0_8px_rgba(255,255,255,0.2)]
        hover:scale-110 hover:shadow-[0_0_55px_rgba(37,211,102,0.8),inset_0_0_10px_rgba(255,255,255,0.3)]
        transition-all duration-300 ease-out
        backdrop-blur-sm
      "
    >
      <FaWhatsapp />
      <span className="sr-only">Abrir chat de WhatsApp</span>

      {/* Burbuja flotante animada */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          delay: 1,
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut",
        }}
        className="
          absolute -top-12 right-0 bg-[#128C7E] text-white text-xs px-4 py-2
          rounded-full shadow-lg whitespace-nowrap font-medium
          border border-white/20
        "
      >
        ¡Chatea con nosotros!
      </motion.span>
    </motion.a>
  );
}
