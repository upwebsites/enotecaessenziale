import React from 'react';
import { motion } from 'framer-motion';
import { Printer, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrintingHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
      {/* Teal/Cyan Gradient Background - Bridges emerald (above) and sky-blue (below) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a1f] via-[#0c1f2a] to-[#0a0a0a] pointer-events-none" />

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] opacity-25 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-8"
          >
            <Sparkles size={12} />
            Stampa Professionale
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-heading mb-6 leading-tight"
          >
            Prodotti su misura <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-bold italic">
              per il tuo brand
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl"
          >
            Espositori, display da banco, vetrofanie, merchandising e molto altro.
            Soluzioni di stampa personalizzate con qualità altissima, tempi rapidissimi e costi competitivi.
          </motion.p>

          {/* Quick Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['Senza costi di impianti', 'Qualsiasi materiale', 'Consegna rapida'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-light/60 text-sm">
                <Check size={14} className="text-cyan-400" />
                <span className="font-light">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/stampa"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 text-white font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 inline-flex items-center gap-3"
            >
              <Printer size={20} />
              <span>Scopri i nostri prodotti</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Secondary Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl w-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-white text-lg font-heading mb-2">Hai bisogno di un preventivo?</h4>
                <p className="text-light/60 text-sm font-light">
                  Contattaci per ricevere una consulenza personalizzata e un preventivo gratuito per i tuoi prodotti da stampa.
                </p>
              </div>
              <Link
                to="/contatti"
                className="whitespace-nowrap px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-400 text-xs uppercase tracking-widest font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Richiedi Preventivo
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrintingHeroSection;
