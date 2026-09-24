import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import DearFlipViewerModal from '../DearFlipViewerModal';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Bollicine decorative che salgono lentamente
const bubbles = [
  { left: '8%', size: 10, delay: 0, duration: 14 },
  { left: '18%', size: 6, delay: 3, duration: 18 },
  { left: '32%', size: 14, delay: 1.5, duration: 16 },
  { left: '55%', size: 8, delay: 4, duration: 20 },
  { left: '68%', size: 12, delay: 2, duration: 15 },
  { left: '80%', size: 7, delay: 5, duration: 19 },
  { left: '90%', size: 11, delay: 0.8, duration: 17 },
];

const ChampagneSection: React.FC = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <section className="relative paper-texture overflow-hidden">
      {/* Bollicine decorative */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#b08d57]/25"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              bottom: -30,
            }}
            animate={{ y: [0, -900], opacity: [0, 0.7, 0] }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Glow champagne */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#e8d5a8]/30 blur-[120px] pointer-events-none z-[1]" />

      <div className="container relative z-[2] py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Testo promozionale */}
          <div className="lg:col-span-7">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1px] bg-[#b08d57]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#b08d57] font-medium">
                Champagne &amp; Bollicine
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-[#1f1f1f] text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              L'eleganza si misura
              <br />
              <span className="font-light italic text-[#b08d57]">in bollicine.</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-5 text-[#5a4a3a]/80 text-base sm:text-lg leading-relaxed font-light max-w-2xl"
            >
              <p>
                C'è un suono che nessuna parola sa replicare: lo schiudersi
                leggero di un tappo, la promessa silenziosa di un momento che
                vale più di mille altri.
              </p>
              <p>
                <em className="text-[#5a4a3a]">
                  Il brindisi perfetto non si improvvisa — si seleziona.
                </em>{' '}
                Champagne, Franciacorta, Prosecco e spumanti metodo classico:
                una selezione che trasforma ogni aperitivo in cerimonia e ogni
                toast in ricordo.
              </p>
            </motion.div>
          </div>

          {/* Box CTA catalogo */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5"
          >
            <button
              onClick={() => setShowCatalog(true)}
              className="group relative w-full text-left bg-[#fffdf8] border border-[#b08d57]/25 hover:border-[#b08d57]/60 rounded-sm p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(176,141,87,0.22)] overflow-hidden paper-card"
            >
              {/* Accento superiore */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stack pagine decorativo */}
              <div className="relative w-20 h-24 mb-8">
                <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 border border-[#b08d57]/30 bg-[#f9f4ea]" />
                <div className="absolute inset-0 translate-x-1 translate-y-1 rotate-1 border border-[#b08d57]/40 bg-[#fdfaf3]" />
                <div className="absolute inset-0 border border-[#b08d57]/60 bg-[#fffdf8] flex flex-col items-center justify-center gap-2">
                  <BookOpen size={22} className="text-[#b08d57]" strokeWidth={1.2} />
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#b08d57]">
                    Catalogo
                  </span>
                </div>
              </div>

              <h3
                className="text-[#1f1f1f] text-2xl md:text-3xl font-medium tracking-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Catalogo Bollicine
              </h3>
              <p className="text-[#5a4a3a]/60 text-sm font-light leading-relaxed mb-8 max-w-xs">
                Sfoglia la selezione completa di champagne e spumanti curata
                per il tuo locale.
              </p>

              <span className="inline-flex items-center gap-3 text-[#1f1f1f] text-xs uppercase tracking-[0.2em] font-medium">
                Sfoglia il catalogo
                <ArrowRight
                  size={14}
                  className="text-[#b08d57] group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {showCatalog && (
        <DearFlipViewerModal
          pdfUrl="/cataloghi/bollicine.pdf"
          onClose={() => setShowCatalog(false)}
        />
      )}
    </section>
  );
};

export default ChampagneSection;
