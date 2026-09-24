import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, X, Play, Pause, CheckCircle2, Zap, Target, Shield, Eye } from 'lucide-react';

const chapters = [
  {
    id: 1,
    title: "Creatività & Strategia",
    subtitle: "Il nostro carburante",
    icon: Eye,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    summary: "Oltre 30 anni di esperienza. Costruiamo strategie, raccontiamo storie, progettiamo esperienze visive.",
    keyPoints: ["Strategia comunicativa su misura", "Storytelling visivo integrato", "Creatività + Tecnologia"],
    imageUrl: "/images/comelavoriamo/creativita.png",
  },
  {
    id: 2,
    title: "La Prestampa",
    subtitle: "Precisione invisibile",
    icon: Zap,
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    summary: "Tecnologia Esko Artwork, controllo Preflight con Colorbox Enfocus, linee Kodak Creo automatizzate.",
    keyPoints: ["Controllo Preflight automatico", "Preset CIP3 per coerenza cromatica", "Fibra ottica dedicata"],
    imageUrl: "/images/comelavoriamo/prestampa.webp",
  },
  {
    id: 3,
    title: "Stampa Roto-Offset",
    subtitle: "Alta tiratura",
    icon: Target,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    summary: "Macchine rotative a bobina per volantini, giornali, riviste, brochure con velocità e precisione sorprendenti.",
    keyPoints: ["Alta velocità di stampa", "Uniformità cromatica garantita", "Supporti delicati gestiti"],
    imageUrl: "/images/comelavoriamo/rotoffset.jpg",
  },
  {
    id: 4,
    title: "Stampa Offset",
    subtitle: "Precisione ed eleganza",
    icon: Shield,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    summary: "Su carta o cartone, tirature elevate per progetti editoriali e commerciali di grande valore.",
    keyPoints: ["Dettaglio impeccabile", "Carta e cartone premium", "Rete con tipografie locali"],
    imageUrl: "/images/comelavoriamo/offset.jpg",
  },
  {
    id: 5,
    title: "GDO",
    subtitle: "Dati, Grafica, Velocità",
    icon: Zap,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    summary: "Archivio di 100.000+ immagini, sistemi automatici di impaginazione, dati variabili su larga scala.",
    keyPoints: ["100.000+ immagini proprietarie", "Web to point automatico", "Gestione dati variabili"],
    imageUrl: "/images/comelavoriamo/gdo.jpg",
  },
  {
    id: 6,
    title: "Volantini",
    subtitle: "Milioni di copie",
    icon: Target,
    color: "from-rose-500 to-red-600",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-400",
    borderColor: "border-rose-500/30",
    summary: "Milioni di volantini promozionali all'anno per le insegne più importanti in Italia e in Europa.",
    keyPoints: ["Personalizzazione per target", "Analisi dati avanzata", "Qualità + Quantità"],
    imageUrl: "/images/comelavoriamo/volantini.jpg",
  },
  {
    id: 7,
    title: "Allestimenti",
    subtitle: "Punti vendita",
    icon: Eye,
    color: "from-sky-500 to-cyan-600",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-400",
    borderColor: "border-sky-500/30",
    summary: "Manifesti, roll-up, pannelli, stopper, pendolini, display su ogni materiale e formato.",
    keyPoints: ["Trasformiamo spazi in esperienze", "Ogni tipo di materiale", "Branding e promozione"],
    imageUrl: "/images/comelavoriamo/allestimento.jpg",
  },
  {
    id: 8,
    title: "Siti Web & E-Commerce",
    subtitle: "Identità digitale",
    icon: Shield,
    color: "from-fuchsia-500 to-pink-600",
    bgColor: "bg-fuchsia-500/10",
    textColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/30",
    summary: "Siti web responsive, UX/UI professionale, copywriting e immagini per emergere online.",
    keyPoints: ["Design responsive premium", "UX/UI centrate sull'utente", "E-Commerce ad alte prestazioni"],
    imageUrl: "/images/comelavoriamo/ecommerce.jpg",
  },
];

const methodData = [
  { phase: "Analisi", desc: "Ascolto delle esigenze e definizione degli obiettivi", icon: Eye, percentage: 15 },
  { phase: "Strategia", desc: "Pianificazione del percorso comunicativo", icon: Target, percentage: 20 },
  { phase: "Creative", desc: "Sviluppo del concept e dei asset visivi", icon: Zap, percentage: 25 },
  { phase: "Realizzazione", desc: "Produzione e controllo qualità", icon: Shield, percentage: 25 },
  { phase: "Delivery", desc: "Consegna e supporto post-vendita", icon: CheckCircle2, percentage: 15 },
];

const ComeLavoriamoPage: React.FC = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextStep = useCallback(() => {
    setCurrentStep(prev => (prev < chapters.length - 1 ? prev + 1 : prev));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !isExperienceOpen) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isExperienceOpen, nextStep]);

  useEffect(() => {
    if (isExperienceOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentStep(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isExperienceOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isExperienceOpen) return;
      if (e.key === 'Escape') setIsExperienceOpen(false);
      if (e.key === 'ArrowRight') nextStep();
      if (e.key === 'ArrowLeft') prevStep();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isExperienceOpen, nextStep, prevStep]);

  const activeChapter = chapters[currentStep];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-accent" />
              Il Nostro Metodo
              <span className="w-8 h-[1px] bg-accent" />
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight">
              Come{' '}
              <span className="italic font-light text-light/50">Lavoriamo</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-light/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Dalla prestampa alla distribuzione, ogni fase del nostro processo è orchestrata con precisione, creatività e tecnologia d'avanguardia.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsExperienceOpen(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-accent text-dark rounded-xl font-semibold uppercase tracking-widest text-sm hover:bg-accent-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Play size={18} />
              Inizia l'esperienza
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Method Overview Section */}
      <section className="py-20 sm:py-24 bg-dark-100 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4"
            >
              Il Metodo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-3xl sm:text-4xl font-heading"
            >
              8 Fasi, <span className="italic font-light text-light/50">un processo unico</span>
            </motion.h2>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {chapters.map((chapter, i) => {
              const Icon = chapter.icon;
              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-5 rounded-xl border ${chapter.borderColor} ${chapter.bgColor} backdrop-blur-sm group cursor-pointer`}
                  onClick={() => {
                    setCurrentStep(i);
                    setIsExperienceOpen(true);
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl font-heading font-bold ${chapter.textColor} opacity-30`}>
                      0{chapter.id}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-dark/50 flex items-center justify-center ${chapter.textColor}`}>
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3 className="text-white text-sm font-heading font-medium mb-1 group-hover:text-white transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-light/40 text-xs font-light">{chapter.subtitle}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Method Stats Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl border border-light/10 overflow-hidden max-w-4xl mx-auto"
          >
            <div className="p-6 border-b border-light/10">
              <h3 className="text-white text-lg font-heading">Distribuzione del Metodo</h3>
              <p className="text-light/40 text-sm font-light mt-1">Come distribuiamo risorse in ogni fase del processo</p>
            </div>
            <div className="divide-y divide-light/5">
              {methodData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 p-4 hover:bg-light/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium">{item.phase}</span>
                        <span className="text-accent text-sm font-heading font-bold">{item.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-dark-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full"
                        />
                      </div>
                      <p className="text-light/40 text-xs font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading text-white mb-6"
          >
            Sei pronto a raccontare chi sei, <span className="italic font-light text-light/50">davvero</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-light/50 font-light max-w-xl mx-auto mb-10"
          >
            Contattaci per iniziare a scrivere la tua storia insieme a noi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contatti" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-dark rounded-xl font-semibold uppercase tracking-widest text-sm hover:bg-accent-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">
              Contattaci ora <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full-Screen Experience Popup */}
      <AnimatePresence>
        {isExperienceOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-dark"
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 z-50 bg-white/10">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / chapters.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-accent text-xs font-heading font-bold tracking-wider">
                  0{currentStep + 1} / 0{chapters.length}
                </span>
                <span className="text-white/30 text-xs">|</span>
                <span className="text-white/50 text-xs font-light hidden sm:inline">{activeChapter.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={() => setIsExperienceOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Chapter Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="h-full flex items-center justify-center px-4 sm:px-6 pt-16 pb-24"
              >
                <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Text */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${activeChapter.bgColor} border ${activeChapter.borderColor} ${activeChapter.textColor} text-xs font-medium`}>
                      <activeChapter.icon size={12} />
                      {activeChapter.subtitle}
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white leading-tight">
                      {activeChapter.title}
                    </h2>

                    <p className="text-light/60 font-light text-base sm:text-lg leading-relaxed">
                      {activeChapter.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeChapter.keyPoints.map((point, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-light/60 text-xs font-light">
                          <CheckCircle2 size={10} className={activeChapter.textColor} />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-1 lg:order-2">
                    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] border ${activeChapter.borderColor} shadow-2xl`}>
                      <img
                        src={activeChapter.imageUrl}
                        alt={activeChapter.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/60 text-xs uppercase tracking-wider font-medium hover:bg-white/5 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={16} /> Indietro
                </button>

                {/* Dots */}
                <div className="hidden sm:flex items-center gap-2">
                  {chapters.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentStep ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  disabled={currentStep === chapters.length - 1}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-dark text-xs uppercase tracking-wider font-semibold hover:bg-accent-light disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Avanti <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br ${activeChapter.color} opacity-5 blur-[150px]`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComeLavoriamoPage;
