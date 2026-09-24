import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, GraduationCap, Award, Heart } from 'lucide-react';

const UpolCertificationSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/40 p-8 md:p-16 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-16 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold"
                >
                  <ShieldCheck size={14} />
                  Standard di Eccellenza
                </motion.div>
                
                <h2 className="text-white text-4xl md:text-6xl font-heading leading-tight">
                  Un Traguardo di <br />
                  <span className="bg-gradient-to-r from-amber-200 via-white to-accent bg-clip-text text-transparent italic font-light">
                    Qualità e Trasparenza
                  </span>
                </h2>
                
                <p className="text-slate-300/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                  Siamo orgogliosi di annunciare che <span className="text-white font-medium">UPOL – Università Popolare Over Line</span> ha ottenuto il riconoscimento della <span className="text-accent">norma proprietaria UNI</span>, certificando l'eccellenza dei nostri percorsi formativi.
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid gap-8 md:grid-cols-3 mb-20">
                {[
                  {
                    icon: <Award className="text-accent" size={24} />,
                    title: "Standard Internazionale",
                    description: "La norma UNI definisce criteri rigorosi di competenza e organizzazione, riconosciuti a livello nazionale e internazionale."
                  },
                  {
                    icon: <CheckCircle2 className="text-accent" size={24} />,
                    title: "Qualità Certificata",
                    description: "Uno strumento fondamentale per chi desidera distinguersi attraverso una formazione strutturata e orientata all'eccellenza."
                  },
                  {
                    icon: <GraduationCap className="text-accent" size={24} />,
                    title: "Maestri Formatori",
                    description: "Un team di esperti con anni di esperienza nella toelettatura, dedicati al benessere di cani e gatti."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative p-8 rounded-[32px] border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-heading text-xl mb-3">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Gratitude Section */}
              <div className="relative p-8 md:p-12 rounded-[32px] border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full bg-[#050505] border border-white/10 text-xs text-slate-400 uppercase tracking-widest">
                  Ringraziamenti
                </div>
                
                <div className="text-center space-y-8">
                  <p className="text-slate-200/90 text-lg font-light max-w-4xl mx-auto leading-relaxed">
                    Esprimo un sentito ringraziamento a <span className="text-white font-medium">SINAPE FELSA CISL</span>, <span className="text-white font-medium">CONFASCESA</span> e <span className="text-white font-medium">AJA Europe</span> per la fiducia accordata e per aver garantito sulla mia professionalità.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 opacity-70">
                    {['SINAPE FELSA CISL', 'CONFASCESA', 'AJA Europe'].map((partner) => (
                      <span key={partner} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Signature */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-16 text-center space-y-4"
              >
                <div className="flex items-center justify-center gap-3 text-accent/60 mb-2">
                  <div className="h-px w-12 bg-accent/30" />
                  <Heart size={16} fill="currentColor" />
                  <div className="h-px w-12 bg-accent/30" />
                </div>
                <p className="text-white text-2xl font-heading italic font-light">Nelly Oliva</p>
                <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">UPOL – Università Popolare Over Line</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpolCertificationSection;