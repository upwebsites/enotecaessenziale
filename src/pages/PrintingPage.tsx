import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, CircleDollarSign, Package, ChevronDown, X, Printer, Eye, Layers, Clock, ShieldCheck, ZoomIn } from 'lucide-react';
import CtaSection from '../components/home/CtaSection';

const products = [
  {
    id: 'espositori',
    title: "Espositori Personalizzati",
    description: "Li realizziamo su misura per il tuo punto vendita.",
    features: ["Senza costi di impianti", "Realizzabili in qualsiasi materiale", "Cartone, forex, plexiglass, dibond e molto altro"],
    imageUrl: "/printing/1.png",
    category: 'point-of-sale',
  },
  {
    id: 'display-banco',
    title: "Display da Banco",
    description: "Soluzioni compatte e d'impatto per il tuo punto vendita.",
    features: ["Senza costi di impianti", "Cartone teso, microonda, plexiglass, forex, dibond", "Soluzioni su misura per il tuo business"],
    imageUrl: "/printing/2.png",
    category: 'point-of-sale',
  },
  {
    id: 'merchandising',
    title: "Merchandising per Eventi e Fiere",
    description: "Personalizziamo gadget e articoli promozionali per il tuo brand.",
    features: ["Senza costi di impianti", "Ampia gamma di articoli", "T-shirt, shopper, tazze, penne, borracce, ombrelli"],
    imageUrl: "/printing/3.png",
    category: 'promotional',
  },
  {
    id: 'vetrofanie',
    title: "Vetrofanie e Adesivi",
    description: "Soluzioni su misura per vetrine, promozioni e comunicazione visiva.",
    features: ["Siamo i più rapidi a consegnare", "Costi bassi", "Vetrofanie, adesivi prespaziati, sticker promozionali, etichette"],
    imageUrl: "/printing/4.png",
    category: 'signage',
  },
  {
    id: 'manifesti',
    title: "Manifesti per Affissioni",
    description: "Stampa di alta qualità per grandi impianti. Promuovi la tua attività con soluzioni su misura.",
    features: ["Stampe nitide e colori brillanti", "Materiali resistenti per ogni condizione", "Perfetti per ogni campagna"],
    imageUrl: "/printing/6.png",
    category: 'signage',
  },
  {
    id: 'zerbini',
    title: "Zerbini Personalizzati",
    description: "Zerbini su misura per ingressi, negozi, uffici e attività.",
    features: ["Siamo i più rapidi a consegnare", "Costi bassi", "Antiscivolo, personalizzati e molto altro"],
    imageUrl: "/printing/7.png",
    category: 'point-of-sale',
  },
  {
    id: 'astucci',
    title: "Astucci Personalizzati",
    description: "Packaging su misura per il tuo prodotto.",
    features: ["Senza costi di impianti", "Realizzabili in qualsiasi materiale", "Cartone teso e molto altro"],
    imageUrl: "/printing/8.png",
    category: 'packaging',
  },
  {
    id: 'modulistica',
    title: "Modulistica e Immagine Coordinata",
    description: "Soluzioni su misura per uffici, professionisti, aziende e attività commerciali.",
    features: ["Siamo i più rapidi a consegnare", "Biglietti da visita, carta intestata, buste, blocchi", "Cartelline e molto altro"],
    imageUrl: "/printing/9.png",
    category: 'office',
  },
  {
    id: 'tazze',
    title: "Tazze Personalizzate",
    description: "Soluzioni su misura per ufficio, regali promozionali ed eventi.",
    features: ["Personalizzazione completa", "Stampa brillante e di qualità", "Ideali per ufficio, regalo e promozione"],
    imageUrl: "/printing/10.png",
    category: 'promotional',
  },
  {
    id: 'penne',
    title: "Penne e Matite Personalizzate",
    description: "Soluzioni su misura per eventi, uffici e campagne marketing.",
    features: ["Senza costi di impianti", "Ampia scelta di modelli e colori", "Ideali per eventi, uffici e omaggi"],
    imageUrl: "/printing/11.png",
    category: 'promotional',
  },
  {
    id: 'zaini',
    title: "Zaini a Sacco Personalizzati",
    description: "Soluzioni su misura per eventi, palestre e campagne promozionali.",
    features: ["Leggeri e pratici", "Ampia scelta di colori", "Ideali per eventi, sport e promozione"],
    imageUrl: "/printing/12.png",
    category: 'promotional',
  },
  {
    id: 'strutture-visual',
    title: "Strutture Visual Personalizzate",
    description: "Soluzioni su misura per fiere, eventi, punti vendita e promozione visiva.",
    features: ["Siamo i più rapidi a consegnare", "Costi bassi", "Roll-up, pop-up, fondali, desk promozionali, totem"],
    imageUrl: "/printing/13.png",
    category: 'signage',
  },
];

const categories = [
  { id: 'all', label: 'Tutti i Prodotti' },
  { id: 'point-of-sale', label: 'Punto Vendita' },
  { id: 'signage', label: 'Cartelleria e Vetrine' },
  { id: 'promotional', label: 'Articoli Promozionali' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'office', label: 'Ufficio e Modulistica' },
];

const processSteps = [
  {
    icon: Printer,
    title: 'Consulenza e Progettazione',
    description: 'Analizziamo le tue esigenze e progettiamo la soluzione più adatta al tuo brand e al tuo punto vendita.',
  },
  {
    icon: Layers,
    title: 'Scelta dei Materiali',
    description: 'Selezioniamo i materiali più idonei: cartone teso, forex, plexiglass, dibond, PVC e molti altri.',
  },
  {
    icon: Zap,
    title: 'Stampa e Lavorazione',
    description: 'Utilizziamo stampanti professionali ad alta risoluzione per garantire colori vividi e dettagli perfetti.',
  },
  {
    icon: ShieldCheck,
    title: 'Controllo Qualità e Consegna',
    description: 'Ogni prodotto supera un rigido controllo qualità prima della consegna rapida e puntuale.',
  },
];

const highlights = [
  { icon: Clock, label: "Consegna Rapida" },
  { icon: CircleDollarSign, label: "Senza Costi di Impianti" },
  { icon: Package, label: "Qualsiasi Materiale" },
  { icon: ShieldCheck, label: "Qualità Garantita" },
];

const PrintingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const selectedCategoryLabel = categories.find(c => c.id === selectedCategory)?.label || 'Tutti i Prodotti';

  const closeFullscreen = useCallback(() => {
    setFullscreenImage(null);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen();
    };
    if (fullscreenImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [fullscreenImage, closeFullscreen]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] z-0"></div>

        <div className="container relative z-10 text-center px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Prodotti che Stampiamo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-heading"
          >
            La nostra <span className="italic font-light text-light/70">produzione</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Dalla grafica alla stampa, soluzioni su misura per ogni esigenza. Qualità, velocità e costi competitivi senza rinunciare alla perfezione.
          </motion.p>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-6 sm:py-8 bg-dark-100 border-y border-light/5">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center gap-2 sm:gap-3 text-light/70"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Printing Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-dark to-dark-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px] z-0"></div>
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">La Nostra Esperienza</p>
              <h2 className="text-white text-3xl sm:text-4xl font-heading mb-6 leading-tight">
                Stampa professionale <span className="italic font-light text-light/70">su misura</span>
              </h2>
              <p className="text-light/60 font-light text-base leading-relaxed mb-6">
                Da Grecart Studio offriamo un servizio completo di grafica e stampa per aziende, professionisti e privati. Utilizziamo tecnologie all'avanguardia e materiali di prima qualità per garantire risultati eccellenti.
              </p>
              <p className="text-light/60 font-light text-base leading-relaxed mb-8">
                Che tu abbia bisogno di espositori per il tuo punto vendita, gadget promozionali per un evento o packaging personalizzato per i tuoi prodotti, siamo in grado di realizzare qualsiasi soluzione su misura.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Altissima Qualità', 'Tempi Rapidissimi', 'Costi Competitivi'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-panel p-4 sm:p-5 rounded-xl border border-light/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3 text-accent">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-white text-sm font-medium mb-2">{step.title}</h4>
                    <p className="text-light/50 text-xs font-light leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section with Filter */}
      <section className="py-16 sm:py-20 bg-dark-100 relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4"
            >
              Catalogo Completo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-3xl sm:text-4xl font-heading mb-4"
            >
              Tutti i nostri <span className="italic font-light text-light/70">prodotti</span>
            </motion.h2>
          </div>

          {/* Category Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10 sm:mb-12"
          >
            <div className="relative w-full max-w-xs">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-medium hover:border-accent/30 transition-colors"
              >
                <span>{selectedCategoryLabel}</span>
                <ChevronDown
                  size={18}
                  className={`text-accent transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-dark-200 border border-light/10 rounded-xl shadow-glass overflow-hidden z-20"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-accent/10 text-accent border-l-2 border-accent'
                            : 'text-light/60 hover:bg-light/5 hover:text-white border-l-2 border-transparent'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group glass-panel rounded-xl border border-light/10 overflow-hidden hover:border-accent/30 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-dark-200">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />

                    {/* View Fullscreen Button */}
                    <button
                      onClick={() => setFullscreenImage(product.imageUrl)}
                      className="absolute bottom-3 right-3 w-10 h-10 bg-dark/70 backdrop-blur-md border border-light/20 rounded-lg flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                      aria-label="Visualizza a tutto schermo"
                    >
                      <ZoomIn size={18} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-white font-heading text-base sm:text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-light/50 font-light text-xs sm:text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {product.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          <span className="text-light/40 text-xs font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setFullscreenImage(product.imageUrl)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-accent/30 text-accent text-xs font-medium hover:bg-accent hover:text-dark transition-all duration-300"
                    >
                      <Eye size={14} />
                      <span>Visualizza Flyer</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Materials Info */}
      <section className="py-12 sm:py-16 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="container text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Materiali</p>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-heading mb-6">
              Realizzabili in <span className="italic font-light text-light/70">qualsiasi materiale</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
              {['Cartone Teso', 'Microonda', 'Forex', 'Plexiglass', 'Dibond', 'PVC', 'Polistirene', 'Dura Flex'].map((material, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-dark-200 border border-light/10 text-light/60 text-xs sm:text-sm font-light">
                  {material}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            onClick={closeFullscreen}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-lg" />

            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[210] w-10 h-10 sm:w-12 sm:h-12 bg-dark/80 border border-light/20 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-dark transition-all duration-300"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={fullscreenImage}
              alt="Flyer a tutto schermo"
              className="relative z-[205] max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PrintingPage;
