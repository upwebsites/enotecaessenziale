import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-32 bg-dark relative overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] rounded-full bg-accent/10 blur-[150px]"></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 relative overflow-hidden"
        >
          {/* Subtle moving light effect inside the card */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
            animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1.2, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Inizia Il Tuo Progetto</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8">
            Pronto a <span className="italic font-light text-light/70">brillare</span>?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-light/60 font-light leading-relaxed">
            Raccontaci la tua idea e scopri come possiamo trasformarla in una realtà straordinaria. L'eccellenza ti aspetta.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contatti" className="btn btn-primary text-sm tracking-widest px-10 py-5">
              Inizia Ora
            </Link>
            <a href="mailto:info@grecartstudio.it" className="btn btn-outline text-sm tracking-widest px-10 py-5 bg-dark">
              Scrivici
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;