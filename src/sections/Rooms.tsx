import { useTranslation } from "react-i18next";

// VIDEO
import roomVideo from "../assets/rooms/video/roomVideo.mp4";

// SUITE
import suiteHero from "../assets/rooms/suite/room.avif";
import suiteInterior1 from "../assets/rooms/suite/room1.avif";
import suiteInterior2 from "../assets/rooms/suite/room2.avif";
import suiteInterior3 from "../assets/rooms/suite/room6.avif";
import suiteBathroom from "../assets/rooms/suite/bano.avif";

// DELUXE
import deluxeInterior1 from "../assets/rooms/deluxe/room3.avif";
import deluxeInterior2 from "../assets/rooms/deluxe/room5.avif";
import deluxeBathroom from "../assets/rooms/deluxe/bano1.avif";
import deluxeBathroom2 from "../assets/rooms/deluxe/bano5.avif";

// STANDARD
import standardInterior1 from "../assets/rooms/standard/room4.avif";
import standardInterior2 from "../assets/rooms/standard/room7.avif";
import standardBathroom from "../assets/rooms/standard/bano2.avif";
import standardBathroom2 from "../assets/rooms/standard/bano4.avif";

import RoomCard from "../components/RoomCard";

export default function Rooms() {
  const { t } = useTranslation();

  return (
    <section
      id="rooms"
      className="
        relative bg-[#f8f5ef]
        bg-fixed
        bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        bg-blend-soft-light
      "
    >
      {/* VIDEO HEADER */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          src={roomVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20" />

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-6xl mx-auto">
          <div>
            <h2 className="font-[Lora] text-white text-4xl md:text-5xl drop-shadow-xl">
              {t("rooms.title")}
            </h2>
            <p className="font-[Manrope] text-white/90 text-lg md:text-xl mt-3 max-w-xl">
              {t("rooms.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* CURVED DIVIDER */}
      <div className="relative w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 150" className="w-full h-[150px]">
          <path
            d="M0,0 C360,120 1080,120 1440,0 L1440,150 L0,150 Z"
            fill="#f8f5ef"
          />
        </svg>
      </div>

      {/* GOLD LINE */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#D8C07A]/70 to-transparent -mt-4" />

      {/* ROOMS GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* SUITE */}
        <RoomCard
          title={t("rooms.suite.title")}
          description={t("rooms.suite.description")}
          price={t("rooms.suite.price")}
          images={[suiteHero, suiteInterior1, suiteInterior2, suiteInterior3, suiteBathroom]}
        />

        {/* DELUXE */}
        <RoomCard
          title={t("rooms.deluxe.title")}
          description={t("rooms.deluxe.description")}
          price={t("rooms.deluxe.price")}
          images={[deluxeInterior1, deluxeInterior2, deluxeBathroom, deluxeBathroom2]}
        />

        {/* STANDARD */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full max-w-[480px]">
            <RoomCard
              title={t("rooms.standard.title")}
              description={t("rooms.standard.description")}
              price={t("rooms.standard.price")}
              images={[standardInterior1, standardInterior2, standardBathroom, standardBathroom2]}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
