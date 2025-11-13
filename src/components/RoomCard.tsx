import { useState } from "react";
import { useTranslation } from "react-i18next";

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  images: string[];
}

export default function RoomCard({
  title,
  description,
  price,
  images,
}: RoomCardProps) {

  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const openWhatsApp = () => {
    const phone = "50670277792";

    // ✅ TEXTO SEGÚN IDIOMA
    const baseText = t("rooms.whatsappMessage");

    const finalText = `${baseText} ${title}.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalText)}`;
    window.open(url, "_blank");
  };

  const goToReservation = () => {
    window.location.href = "/reservation";
  };

  return (
    <div
      className="
        bg-white rounded-2xl
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        border border-slate-200/40
        overflow-hidden
        transition-all duration-500
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        hover:-translate-y-2
        max-w-[450px] mx-auto
      "
    >
      {/* SLIDER */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={images[index]}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            bg-black/40 text-white rounded-full
            h-8 w-8 flex items-center justify-center
            hover:bg-black/60 transition
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            bg-black/40 text-white rounded-full
            h-8 w-8 flex items-center justify-center
            hover:bg-black/60 transition
          "
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h3 className="font-[Lora] text-xl text-blue-900">{title}</h3>

        <p className="font-[Manrope] text-slate-700 text-sm leading-relaxed">
          {description}
        </p>

        <p className="font-[Manrope] text-blue-900 font-semibold text-lg">
          {price}
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-3 mt-5">

          {/* ✅ BOOK NOW → /reservation */}
          <button
            onClick={goToReservation}
            className="
              w-full py-3 rounded-xl
              bg-[#D8C07A] text-black font-semibold
              shadow-md hover:shadow-xl
              hover:bg-[#c4aa6d]
              transition-all
            "
          >
            {t("rooms.bookNow")}
          </button>

          {/* ✅ WHATSAPP → availability */}
          <button
            onClick={openWhatsApp}
            className="
              w-full py-3 rounded-xl
              border border-[#D8C07A] text-[#8B6F2F]
              bg-white
              font-semibold shadow-sm
              hover:bg-[#fff7e1]
              hover:border-[#C9B177]
              transition-all
            "
          >
            {t("roomCard.checkAvailability")}
          </button>

        </div>

      </div>
    </div>
  );
}
