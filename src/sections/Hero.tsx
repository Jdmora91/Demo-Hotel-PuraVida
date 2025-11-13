import CalendarLite from "../components/CalendarLite";
import { useTranslation } from "react-i18next";
import video from "../assets/hero/video/bahia.mp4";
import heroFallback from "../assets/hero/drone.avif";


export interface AvailabilityPayload {
  checkIn: string;
  checkOut: string;
  guests: number;
}

function openWhatsApp({ checkIn, checkOut, guests }: AvailabilityPayload) {
  const phone = "50670277792";
  const text = `Hola, quiero reservar del ${checkIn} al ${checkOut} para ${guests} huésped(es).`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

export default function Hero() {
  const { t } = useTranslation();

  const handleAvailability = (payload: AvailabilityPayload) => {
    openWhatsApp(payload);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen overflow-hidden pb-16"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        poster={heroFallback}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-40">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT COLUMN */}
          <div className="space-y-6">

            {/* Luxury Badge */}
            <div className="inline-block rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5">
              <span className="font-[Manrope] text-[12px] tracking-wide text-white uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white font-[Lora] text-5xl md:text-6xl leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              {t("hero.title")}
            </h1>

            {/* Subtitle */}
            <p className="font-[Manrope] text-white/90 text-lg md:text-xl leading-relaxed max-w-xl drop-shadow">
              {t("hero.subtitle")}
            </p>

            {/* Calendar */}
            <div className="pt-2">
              <CalendarLite onChange={handleAvailability} />
            </div>
          </div>

          {/* RIGHT COLUMN — OPTIONAL SPACE FOR BALANCE */}
          <div className="hidden md:block">
            {/* Future: testimonials, awards, highlights */}
          </div>

        </div>
      </div>

      {/* Soft Light Decorations */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-10 h-96 w-96 rounded-full bg-blue-300/20 blur-[140px]" />

    
    </section>
  );
}
