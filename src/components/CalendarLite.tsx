import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { AvailabilityPayload } from "../sections/Hero";

interface CalendarLiteProps {
  onChange: (payload: AvailabilityPayload) => void;
}

export default function CalendarLite({ onChange }: CalendarLiteProps) {
  const { t } = useTranslation();

  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert("Please select dates.");
      return;
    }

    onChange({
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/20 
        backdrop-blur-xl 
        p-6 
        rounded-2xl 
        shadow-xl 
        border border-white/40
        max-w-sm 
        flex flex-col 
        gap-5
      "
    >
      {/* CHECK-IN */}
      <div className="flex flex-col gap-1">
        <label className="font-[Manrope] text-sm text-white/90 tracking-wide">
          {t("hero.calendar.checkIn")}
        </label>

        <input
          aria-label={t("hero.calendar.checkIn")}
          type="date"
          className="
            p-3 
            rounded-lg 
            border border-white/30 
            bg-white/70 
            text-slate-900 
            font-[Manrope]
            focus:outline-none 
            focus:border-blue-300 
            focus:ring-2 
            focus:ring-blue-200/70
            transition-all
          "
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* CHECK-OUT */}
      <div className="flex flex-col gap-1">
        <label className="font-[Manrope] text-sm text-white/90 tracking-wide">
          {t("hero.calendar.checkOut")}
        </label>

        <input
          aria-label={t("hero.calendar.checkOut")}
          type="date"
          className="
            p-3 
            rounded-lg 
            border border-white/30 
            bg-white/70 
            text-slate-900 
            font-[Manrope]
            focus:outline-none 
            focus:border-blue-300 
            focus:ring-2 
            focus:ring-blue-200/70
            transition-all
          "
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* GUESTS */}
      <div className="flex flex-col gap-1">
        <label className="font-[Manrope] text-sm text-white/90 tracking-wide">
          {t("hero.calendar.guests")}
        </label>

        <input
          aria-label={t("hero.calendar.guests")}
          type="number"
          min={1}
          className="
            p-3 
            rounded-lg 
            border border-white/30 
            bg-white/70 
            text-slate-900 
            font-[Manrope]
            focus:outline-none 
            focus:border-blue-300 
            focus:ring-2 
            focus:ring-blue-200/70
            transition-all
          "
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          mt-2
          font-[Manrope]
          tracking-wide
          bg-white/90 
          text-slate-800 
          py-3 
          rounded-xl
          shadow-md 
          hover:bg-white 
          hover:shadow-lg
          border border-white/50
          transition-all
        "
      >
        {t("hero.calendar.button")}
      </button>
    </form>
  );
}
