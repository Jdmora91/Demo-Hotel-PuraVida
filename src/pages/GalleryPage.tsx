import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

/* ✅ IMPORT ALL IMAGES PROPERLY FOR VITE */
import drone from "../assets/gallery/drone hotel.avif";
import pool from "../assets/gallery/piscina.avif";
import restaurant from "../assets/gallery/restaurant.avif";
import spa from "../assets/gallery/spa.avif";
import suite from "../assets/gallery/suite.avif";
import kayak from "../assets/gallery/kayak.avif";
import lobby from "../assets/gallery/lobby.avif";
import pool2 from "../assets/gallery/piscina1.avif";

/* ✅ STRUCTURE TO LINK WITH TRANSLATIONS */
const GALLERY_ITEMS = [
  { key: "drone", src: drone },
  { key: "pool", src: pool },
  { key: "restaurant", src: restaurant },
  { key: "spa", src: spa },
  { key: "suite", src: suite },
  { key: "kayak", src: kayak },
  { key: "lobby", src: lobby },
  { key: "pool2", src: pool2 },
];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [index, setIndex] = useState<number | null>(null);

  const openModal = (i: number) => setIndex(i);
  const closeModal = () => setIndex(null);
  const next = () => setIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  const prev = () =>
    setIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  return (
    <div
      className="
        min-h-screen text-[#1a1a1a] pb-24 relative overflow-hidden
        bg-gradient-to-br from-[#faf8f2] via-[#f4efe7] to-[#fefcf9]
        bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        bg-[length:120px_120px]
        bg-blend-soft-light
      "
    >
      {/* ✅ LUXURY NAVBAR */}
      <Navbar />

      {/* ✅ PAGE HEADER */}
      <header className="pt-32 text-center px-6">
        <h1 className="font-[Cormorant_Garamond] text-5xl md:text-6xl text-[#bca76a] drop-shadow-sm">
          {t("gallery.title")}
        </h1>

        <p className="font-[Manrope] text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
          {t("gallery.subtitle")}
        </p>

        <a
          href="/#inicio"
          className="
            mt-8 inline-block px-6 py-3 rounded-full
            bg-[#d9c28a] text-white font-semibold shadow-lg
            hover:bg-[#c7b274] hover:shadow-xl hover:-translate-y-[2px]
            transition-all duration-300
          "
        >
          {t("gallery.back")}
        </a>
      </header>

      {/* ✅ LUXURY MASONRY GRID */}
      <div
        className="
          px-6 md:px-16
          columns-1 sm:columns-2 md:columns-3 lg:columns-4
          gap-5 mt-16 space-y-5
        "
      >
        {GALLERY_ITEMS.map((item, i) => (
          <img
            key={item.key}
            src={item.src}
            alt={t(`gallery.items.${item.key}.title`)}
            className="
              w-full rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              hover:scale-[1.04] hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
              hover:-translate-y-1 hover:brightness-105
              transition-all cursor-pointer
              animate-fadeIn delay-dynamic
            "
            style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      {/* ✅ CINEMATIC MODAL */}
      {index !== null && (
        <div
          className="
            fixed inset-0 bg-black/60 backdrop-blur-md
            flex items-center justify-center z-[999]
            p-4 animate-fadeIn
          "
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-[520px]
              bg-gradient-to-b from-[#fffdfa] to-[#f9f6ee]
              rounded-3xl shadow-2xl border border-[#d9c28a]/40
              p-6 animate-scaleIn
            "
          >
            {/* ✅ CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
                absolute -top-5 -right-5 h-12 w-12
                bg-[#d9c28a] text-white text-2xl font-bold
                rounded-full shadow-lg
                flex items-center justify-center
                hover:bg-[#c4aa6d] hover:scale-110 transition
              "
            >
              ✕
            </button>

            {/* ✅ TITLE */}
            <h2 className="text-center font-[Cormorant_Garamond] text-3xl text-[#bca76a] mb-2">
              {t(`gallery.items.${GALLERY_ITEMS[index].key}.title`)}
            </h2>

            {/* ✅ DESCRIPTION */}
            <p className="text-center text-slate-600 text-sm mb-5 font-[Manrope]">
              {t(`gallery.items.${GALLERY_ITEMS[index].key}.desc`)}
            </p>

            {/* ✅ IMAGE */}
            <img
              src={GALLERY_ITEMS[index].src}
              alt=""
              className="rounded-2xl w-full object-contain max-h-[60vh] shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
            />

            {/* ✅ NEXT/PREV BUTTONS */}
            <div className="flex justify-between mt-5">
              <button
                onClick={prev}
                className="
                  px-5 py-2 rounded-full bg-[#d9c28a] text-white font-semibold
                  shadow-md hover:bg-[#c4aa6d] hover:shadow-lg hover:translate-x-[-2px]
                  transition-all
                "
              >
                ◀ {t("gallery.prev", "Prev")}
              </button>

              <button
                onClick={next}
                className="
                  px-5 py-2 rounded-full bg-[#d9c28a] text-white font-semibold
                  shadow-md hover:bg-[#c4aa6d] hover:shadow-lg hover:translate-x-[2px]
                  transition-all
                "
              >
                {t("gallery.next", "Next")} ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
