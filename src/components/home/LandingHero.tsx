import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RegionModal, { RegionData } from './RegionModal';
import { regions } from './regionsData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const LandingHero: React.FC = () => {
  const [selected, setSelected] = useState<RegionData | null>(null);

  return (
    <section className="relative bg-[#f7f5f2] overflow-hidden">
      {/* Background SVG illustration — spans entire section */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <img
          src="/background.svg"
          alt=""
          className="w-full h-full object-cover opacity-[0.07] md:w-[65vw] md:h-auto md:object-contain md:mr-[-5vw] md:mt-[-5vh]"
        />
      </div>

      {/* Top gradient: soft fade-in from top */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-b from-[#f7f5f2] via-[#f7f5f2]/80 to-transparent z-[1]" />

      {/* Bottom gradient: soft fade-out to unify with what comes after */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none bg-gradient-to-t from-[#f7f5f2] via-[#f7f5f2]/60 to-transparent z-[1]" />

      {/* Left-to-right gradient: clears the background over the regions area */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'linear-gradient(to right, #f7f5f2 25%, #f7f5f2dd 50%, transparent 75%)' }} />

      {/* Decorative wine-colored accent — flows through both hero and regions */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.025] z-0">
        <div
          className="w-full h-full"
          style={{ background: 'linear-gradient(160deg, transparent 30%, #4a1a2e 80%, #2a0e1b 100%)' }}
        />
      </div>

      <div className="container relative z-[2] pt-20 md:pt-24 pb-16 md:pb-20">
        {/* Brand title */}
        <div className="mb-4 md:mb-6">
          <img src="/logo.svg" alt="enotecaessenziale" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto" />
        </div>

        {/* Hero text */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#1f1f1f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Il vino italiano,
            <br />
            <span className="font-light italic text-[#5a4a3a]">dalla cantina alla tua tavola.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#5a4a3a]/70 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl"
          >
            Selezioniamo i migliori vini dalle regioni italiane e li portiamo
            direttamente al settore ho.re.ca. Ristoranti, hotel, bar e enoteche
            trovano in noi un partner affidabile per una cantina sempre eccellente.
          </motion.p>
        </div>

        {/* Regions — left-aligned, same width as text */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          {regions.map((region, index) => (
            <motion.div
              key={region.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setSelected(region)}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <img
                  src={`/regioni/${region.slug}.svg`}
                  alt={region.name}
                  className="w-full h-full object-contain opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(18%) saturate(320%) hue-rotate(345deg) brightness(90%) contrast(85%)' }}
                />
              </div>
              <span
                className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#5a4a3a]/50 group-hover:text-[#5a4a3a] transition-colors font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {region.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <RegionModal region={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default LandingHero;
