interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-14">
      
      {/* TITLE */}
      <h2
        className="
          font-[Cormorant_Garamond]
          text-4xl md:text-5xl
          text-[#1C2A39]
          font-semibold
          tracking-wide
        "
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className="
            font-[Manrope]
            text-slate-600
            mt-3
            max-w-xl mx-auto
            text-sm md:text-base
            leading-relaxed
          "
        >
          {subtitle}
        </p>
      )}

      {/* GOLD LINE */}
      <div className="flex justify-center mt-6">
        <div
          className="
            w-24 h-[2px]
            bg-gradient-to-r
            from-transparent via-[#d9c28a] to-transparent
          "
        />
      </div>

    </div>
  );
}
