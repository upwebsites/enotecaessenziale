import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight } from 'lucide-react';
import DearFlipViewerModal from '../DearFlipViewerModal';

export interface RegionData {
  name: string;
  slug: string;
  description: string;
  character: string;
  grapevines: string[];
  catalogPdf?: string;
}

interface RegionModalProps {
  region: RegionData | null;
  onClose: () => void;
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const RegionModal: React.FC<RegionModalProps> = ({ region, onClose }) => {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <AnimatePresence>
      {region && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 w-screen h-screen overflow-y-auto"
          style={{ background: 'linear-gradient(160deg, #2a0e1b 0%, #4a1a2e 40%, #3a1528 100%)' }}
        >
          {/* Top gradient — ensures logo and close button don't overlap text */}
          <div className="fixed top-0 left-0 w-full h-24 pointer-events-none z-[49] bg-gradient-to-b from-[#3a1528] via-[#3a1528]/80 to-transparent" />

          {/* Logo */}
          <div className="fixed top-6 left-8 z-50">
            <img src="/logo.svg" alt="enotecaessenziale" className="h-16 sm:h-20 md:h-24 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 transition-colors"
          >
            <X size={18} className="text-white/70" />
          </button>

          {/* Large SVG background */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <motion.img
              key={region.slug}
              src={`/regioni/${region.slug}.svg`}
              alt=""
              className="w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] object-contain"
              style={{ opacity: 0.07, filter: 'brightness(0) invert(1)' }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.07, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Content — two column layout */}
          <div className="relative z-10 min-h-screen flex items-center px-8 sm:px-12 md:px-16 lg:px-24 py-20">
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">

              {/* Left — text content */}
              <motion.div
                className="flex-1"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-white text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-none mb-3"
                >
                  {region.name}
                </motion.h2>

                <motion.div variants={fadeUp} className="w-16 h-[2px] bg-white/20 mb-10" />

                <motion.p
                  variants={fadeUp}
                  className="text-white/60 text-sm sm:text-base leading-relaxed font-light mb-10 max-w-xl"
                >
                  {region.description}
                </motion.p>

                <motion.h3
                  variants={fadeUp}
                  className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium mb-4"
                >
                  Caratteristiche
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  className="text-white/50 text-sm sm:text-base leading-relaxed font-light mb-10 max-w-xl"
                >
                  {region.character}
                </motion.p>

                <motion.h3
                  variants={fadeUp}
                  className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium mb-4"
                >
                  Vitigni principali
                </motion.h3>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {region.grapevines.map((grape, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs tracking-wide text-white/50 border border-white/10 rounded-full font-light hover:text-white/70 hover:border-white/20 transition-colors"
                    >
                      {grape}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — catalog panel */}
              <motion.div
                className="lg:w-[340px] xl:w-[380px] flex-shrink-0 lg:sticky lg:top-32"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setShowCatalog(true)}
                  className="group w-full text-left rounded-2xl border border-white/[0.07] hover:border-white/[0.18] transition-all duration-500 overflow-hidden"
                  style={{ background: 'linear-gradient(170deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  {/* Catalog preview area */}
                  <div className="relative h-56 sm:h-64 flex items-center justify-center overflow-hidden">
                    {/* Decorative page stack */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative w-36 h-48 sm:w-40 sm:h-56">
                        {/* Back page */}
                        <div className="absolute inset-0 bg-white/[0.03] rounded-lg border border-white/[0.05] rotate-3 translate-x-1 translate-y-1" />
                        {/* Middle page */}
                        <div className="absolute inset-0 bg-white/[0.05] rounded-lg border border-white/[0.06] rotate-1" />
                        {/* Front page */}
                        <div className="absolute inset-0 bg-white/[0.08] rounded-lg border border-white/[0.08] flex flex-col items-center justify-center gap-3">
                          <BookOpen size={28} className="text-white/20 group-hover:text-white/35 transition-colors duration-500" />
                          <div className="text-white/15 text-[10px] uppercase tracking-[0.2em] font-light">Catalogo</div>
                          <div className="w-16 h-[1px] bg-white/10" />
                          <div className="text-white/25 text-xs font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {region.name}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Catalog info */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-light group-hover:text-white/70 transition-colors">
                        Catalogo vini
                      </span>
                      <ArrowRight size={14} className="text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    <p className="text-white/30 text-xs font-light leading-relaxed">
                      Esplora la selezione completa dei vini della regione {region.name.toLowerCase()} nel nostro catalogo.
                    </p>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>

          {/* DearFlip Catalog Viewer */}
          {showCatalog && (
            <DearFlipViewerModal
              pdfUrl={`/cataloghi/${region.slug}.pdf`}
              onClose={() => setShowCatalog(false)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegionModal;
