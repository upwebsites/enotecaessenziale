import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Abstract Animated Glow Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-light/5 blur-[100px] mix-blend-screen opacity-30"></div>
      
      {/* Decorative Grid Overlay (optional, subtle texture) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 z-0"></div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-accent mr-4 inline-block"></span>
              Agenzia Creativa & Design Studio
            </p>
          </motion.div>

          <motion.h1 
            className="text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Diamo forma alle tue <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">visioni più audaci.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-light/70 font-light max-w-3xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Trasformiamo concetti in comunicazione visiva che cattura, coinvolge e converte. Rendiamo il tuo brand indimenticabile.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/servizi" className="btn btn-primary group px-10 py-5 text-sm">
              Scopri cosa facciamo
              <motion.span 
                className="ml-3 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link to="/tutti-i-lavori" className="btn btn-outline px-10 py-5 text-sm">
              I nostri lavori
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-light/40 text-xs uppercase tracking-widest mb-2 font-light">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-light/20 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-full bg-accent absolute top-0 left-0"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;