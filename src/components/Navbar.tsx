import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const LANGS = ["es", "en", "fr"] as const;
  type Lang = typeof LANGS[number];
  const changeLang = (lang: Lang) => i18n.changeLanguage(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Smooth scroll o redirección si estás fuera de "/"
  const goTo = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          border-b border-[#d9c28a]/20
          ${
            scrolled
              ? "bg-black/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
              : "bg-black/30 backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20 relative">

            {/* LOGO + TITLE */}
            <a href="/" className="flex items-center gap-3 select-none">
              <img
                src={logo}
                alt="Pura Vida Hotel Logo"
                className="
                  h-12 w-auto object-contain 
                  drop-shadow-[0_4px_6px_rgba(0,0,0,0.45)]
                  hover:scale-[1.04] transition-transform duration-500
                "
              />

              <span
                className="
                  font-[Cormorant_Garamond] italic
                  text-[1.8rem] text-[#d9c28a]
                  tracking-wide whitespace-nowrap
                "
              >
                Pura Vida Hotel
              </span>
            </a>

            {/* ✅ DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => goTo("inicio")} className="nav-item-desktop">
                {t("nav.home")}
              </button>

              <button onClick={() => goTo("rooms")} className="nav-item-desktop">
                {t("nav.rooms")}
              </button>

              <button onClick={() => goTo("amenities")} className="nav-item-desktop">
                {t("nav.amenities")}
              </button>

              <a href="/gallery" className="nav-item-desktop">
                {t("nav.gallery")}
              </a>

              <button onClick={() => goTo("location")} className="nav-item-desktop">
                {t("nav.location")}
              </button>

              <button onClick={() => goTo("contact")} className="nav-item-desktop">
                {t("nav.contact")}
              </button>

              {/* ✅ RESERVATION BUTTON → /reservation */}
              <button
                onClick={() => (window.location.href = "/reservation")}
                className="
                  px-6 py-2 rounded-full bg-[#d9c28a] text-black
                  font-semibold text-sm shadow-lg
                  hover:bg-[#c9b177] transition-all
                "
              >
                {t("nav.book")}
              </button>
            </div>

            {/* LANG SWITCH */}
            <div className="hidden md:flex items-center gap-6">
              {LANGS.map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLang(lang)}
                  className={`text-xl transition ${
                    i18n.language === lang
                      ? "text-[#d9c28a] font-bold"
                      : "text-slate-200 hover:text-[#d9c28a]"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-4xl text-[#d9c28a]"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ MOBILE MENU PANEL */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm">
          <div
            className="
              absolute right-0 top-0 h-full w-[75%]
              bg-black/40 backdrop-blur-2xl
              border-l border-[#d9c28a]/25
              shadow-[0_0_60px_rgba(0,0,0,0.7)]
              animate-slideLeft p-10 flex flex-col
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="text-4xl text-[#d9c28a] self-end"
            >
              ✕
            </button>

            {/* ✅ PERFECTLY ALIGNED MOBILE MENU */}
            <nav className="flex flex-col gap-10 mt-10 w-full text-center">

              <button onClick={() => { setOpen(false); goTo("inicio");}} className="menu-item">
                {t("nav.home")}
              </button>

              <button onClick={() => { setOpen(false); goTo("rooms"); }} className="menu-item">
                {t("nav.rooms")}
              </button>

              <button onClick={() => { setOpen(false); goTo("amenities"); }} className="menu-item">
                {t("nav.amenities")}
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/gallery";
                }}
                className="menu-item"
              >
                {t("nav.gallery")}
              </button>

              <button onClick={() => { setOpen(false); goTo("location"); }} className="menu-item">
                {t("nav.location")}
              </button>

              <button onClick={() => { setOpen(false); goTo("contact"); }} className="menu-item">
                {t("nav.contact")}
              </button>
            </nav>

               {/* ✅ RESERVATION BUTTON */}
         
              <div className="mt-6 flex justify-center">
                <button
                onClick={() => (window.location.href = "/reservation")}
                className="
                  px-5 py-2 rounded-full bg-[#d9c28a] text-black
                  font-semibold text-sm shadow-md
                  hover:bg-[#c9b177] transition-all w-fit 
                "
              >
                {t("nav.book")}
              </button>
              </div>

            {/* LANGS */}
            <div className="flex gap-6 justify-center mt-12">
              {LANGS.map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLang(lang)}
                  className={`text-xl ${
                    i18n.language === lang
                      ? "text-[#d9c28a] font-semibold"
                      : "text-slate-200 hover:text-[#d9c28a]"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
