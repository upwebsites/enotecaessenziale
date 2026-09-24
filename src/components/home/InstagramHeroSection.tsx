import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';

const InstagramHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
      {/* Instagram Gradient Background - Subtle and sophisticated */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#405de6]/10 via-[#c13584]/10 to-[#fd1d1d]/10 pointer-events-none" />
      
      {/* Animated Gradient Orbs for that "Instagram" feel */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#bc1888] via-[#dc2743] to-[#f09433] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 border border-white/10 text-white text-xs uppercase tracking-widest font-semibold mb-8"
          >
            <Sparkles size={12} className="text-[#dc2743]" />
            Stay Connected
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-heading mb-6 leading-tight"
          >
            Scopri il nostro mondo su <br />
            <span className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] bg-clip-text text-transparent font-bold italic">
              Instagram
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
            Dietro ogni progetto c'è un'idea, un processo e tanta passione. 
            Seguici per vedere i nostri ultimi lavori, i dietro le quinte e l'ispirazione quotidiana di Grecart Studio.
          </motion.p>

          {/* Primary CTA - Visit Instagram */}
          <motion.a 
            href="https://www.instagram.com/grecartstudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,39,67,0.4)] hover:scale-105 flex items-center gap-3"
          >
            <Instagram size={20} />
            <span>Visita il nostro profilo</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Secondary CTA - Management Service */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl w-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-white text-lg font-heading mb-2">Vuoi una presenza magnetica?</h4>
                <p className="text-light/60 text-sm font-light">
                  Affida la gestione della tua pagina Instagram a Grecart Studio per trasformare i tuoi follower in clienti.
                </p>
              </div>
               <motion.a 
                 href="/contatti" 
                 className="whitespace-nowrap px-6 py-3 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Richiedi Gestione
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InstagramHeroSection;