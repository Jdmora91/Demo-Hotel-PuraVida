import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Importa tus imágenes y video
import ballenaVideo from "../assets/location/ballena.mp4";
import nauyaca from "../assets/location/nauyaca.avif";
import nauyaca2 from "../assets/location/nauyaca2.avif";
import rios from "../assets/location/rios.avif";
import surf from "../assets/location/surf.avif";
import rana from "../assets/location/rana.avif";

export default function LocationSection() {
  const { t } = useTranslation();

  const places = [
    { src: surf, name: t("location.uvita"), desc: t("location.uvitaDesc") },
    { src: nauyaca2, name: t("location.nauyaca"), desc: t("location.nauyacaDesc") },
    { src: rios, name: t("location.rio"), desc: t("location.rioDesc") },
    { src: rana, name: t("location.nature"), desc: t("location.natureDesc") },
    { src: nauyaca, name: t("location.airport"), desc: t("location.airportDesc") },
  ];

  return (
    <section
      id="location"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden text-white"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src={ballenaVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.55),rgba(0,0,0,0.9))] backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[Lora] text-5xl md:text-6xl text-[#d4b66a] mb-6"
        >
          {t("location.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 max-w-2xl mx-auto mb-12"
        >
          {t("location.subtitle")}
        </motion.p>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(212,182,106,0.15)] mb-16"
        >
          <iframe
            title="Pura Vida Hotel Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.8966518012254!2d-83.658!3d9.153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14f6b4d7a31cf%3A0xa71d049fbcbff62f!2sBah%C3%ADa%20Ballena!5e0!3m2!1ses!2scr!4v1700000000000"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {places.map((p, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl group bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={p.src}
                alt={p.name}
                className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="p-5 text-left">
                <h3 className="text-[#d4b66a] font-[Cormorant_Garamond] text-2xl mb-1">
                  {p.name}
                </h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.google.com/maps/dir/?api=1&destination=Bahia+Ballena+Costa+Rica"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block px-8 py-3 rounded-full bg-[#d4b66a] text-black font-semibold hover:bg-[#c9b177] transition-all shadow-lg"
        >
          {t("location.button")}
        </motion.a>
      </div>
    </section>
  );
}
