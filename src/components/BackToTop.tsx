import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollY } = useScroll();
  const yMove = useTransform(scrollY, [0, 300], [0, 80]);
  const smoothY = useSpring(yMove, { stiffness: 25, damping: 18, mass: 0.5 });

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      style={{ y: smoothY }}
      onClick={scrollToTop}
      aria-label="Volver arriba"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed bottom-28 right-3 z-[9999]
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-gradient-to-br from-[#fffdfa] via-[#fef9e6] to-[#f8e8b1]
        text-[#0a0a0a] text-2xl font-bold
        shadow-[0_0_35px_rgba(250,215,140,0.35),inset_0_0_8px_rgba(255,255,255,0.6)]
        border border-[#d4b66a]/50
        hover:scale-110 hover:shadow-[0_0_55px_rgba(250,215,140,0.6),inset_0_0_12px_rgba(255,255,255,0.8)]
        hover:-translate-y-1
        transition-all duration-300 ease-out
        backdrop-blur-sm
      "
    >
      <FaArrowUp className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]" />
    </motion.button>
  );
}
