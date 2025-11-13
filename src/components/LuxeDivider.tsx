export default function LuxeDivider() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden pointer-events-none select-none">

      {/* --- PACIFIC LUXURY BLEND --- */}
      <div
        className="
          absolute inset-0
          bg-[#0d1b2a]                           /* Azul profundo mar */
          bg-gradient-to-b
          from-[#0d1b2a]
          via-[#1a1a1a]                           /* Gris cálido */
          to-[#101010]                            /* Negro editorial */
        "
      />

      {/* Soft golden haze */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_40%_20%,rgba(255,225,160,0.10),transparent_70%)]
          opacity-70
          blur-[40px]
        "
      />

      {/* Golden Waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,240
            C300,260 520,120 820,200
            C1100,260 1300,180 1440,210
          "
          stroke="rgba(255,215,140,0.65)"
          strokeWidth="3"
          fill="none"
          className="animate-[wave1_7s_ease-in-out_infinite]"
        />

        <path
          d="
            M0,260
            C260,200 520,260 820,160
            C1080,80 1260,220 1440,200
          "
          stroke="rgba(255,230,180,0.35)"
          strokeWidth="2"
          fill="none"
          className="animate-[wave2_10s_ease-in-out_infinite]"
        />
      </svg>

      {/* SUBTLE GRAIN */}
      <div
        className="
          absolute inset-0 
          opacity-[0.10]
          mix-blend-soft-light
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />
    </div>
  );
}
