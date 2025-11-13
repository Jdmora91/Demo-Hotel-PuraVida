import { useTranslation } from "react-i18next";


// IMAGES
import piscinaHero from "../assets/amenities/piscina.avif";
import piscina2 from "../assets/amenities/piscina1.avif";
import restaurant from "../assets/amenities/restaurant.avif";
import spa from "../assets/amenities/spa.avif";
import suite from "../assets/amenities/suite.avif";
import kayak from "../assets/amenities/kayak.avif";

export default function Amenities() {
  const { t } = useTranslation();

  return (
    <section id="amenities" className="bg-[#F9F6F0]">

      {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
          MINI HERO (Luxury)
      ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
      <div className="relative h-[45vh] w-full overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src={piscinaHero}
          alt="Luxury Pool"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

        <div className="relative z-10 flex items-end h-full p-10">
          <h2 className="font-[Cormorant_Garamond] text-white text-5xl drop-shadow-2xl">
            {t("amenities.title")}
          </h2>
        </div>
      </div>

      {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
          GRID 3 (Superior)
      ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid md:grid-cols-3 gap-12">

        {/* SPA */}
        <AmenityCard
          img={spa}
          title={t("amenities.spa.title")}
          text={t("amenities.spa.text")}
        />

        {/* RESTAURANT */}
        <AmenityCard
          img={restaurant}
          title={t("amenities.restaurant.title")}
          text={t("amenities.restaurant.text")}
        />

        {/* POOLS */}
        <AmenityCard
          img={piscina2}
          title={t("amenities.pool.title")}
          text={t("amenities.pool.text")}
        />

      </div>

      {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
          GRID 2 (Inferior)
      ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 grid md:grid-cols-2 gap-12">

        {/* SUITE DETAILS */}
        <AmenityCard
          img={suite}
          title={t("amenities.suite.title")}
          text={t("amenities.suite.text")}
        />

        {/* EXPERIENCES */}
        <AmenityCard
          img={kayak}
          title={t("amenities.experiences.title")}
          text={t("amenities.experiences.text")}
        />

      </div>

    </section>
  );
}

/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
   AMENITY CARD COMPONENT
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ */
interface Props {
  img: string;
  title: string;
  text: string;
}

function AmenityCard({ img, title, text }: Props) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

      {/* IMAGE */}
      <div className="h-60 w-full relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-3">
        <h3 className="font-[Cormorant_Garamond] text-3xl text-[#1C2A39]">
          {title}
        </h3>

        <p className="font-[Manrope] text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>

    </div>
  );
}
