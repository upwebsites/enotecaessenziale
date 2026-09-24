import React, { useState } from 'react';
import CtaSection from '../components/home/CtaSection';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  BookOpen, 
  Package, 
  Globe, 
  Instagram, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Target, 
  ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Grafica Pubblicitaria",
    description: "Creiamo campagne pubblicitarie d'impatto che catturano l'attenzione del pubblico e comunicano efficacemente il messaggio del tuo brand. Dal concept creativo alla realizzazione finale, sviluppiamo soluzioni visive che si distinguono e lasciano il segno.",
    benefits: [
      "Visual accattivanti per campagne online e offline",
      "Manifesti, locandine e materiali promozionali",
      "Banner e inserzioni digitali ottimizzati per ogni piattaforma",
      "Concept creativi personalizzati e strategici"
    ],
    imageUrl: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1600",
    icon: Palette,
    metrics: {
      creativeFocus: "Alta",
      technicalComplexity: "Media",
      deliveryTime: "Rapido",
      strategicImpact: "Elevato"
    }
  },
  {
    title: "Grafica Editoriale",
    description: "Progettiamo layout eleganti e funzionali per pubblicazioni cartacee e digitali che valorizzano i contenuti e riflettono l'identità del brand. Dalla scelta tipografica alla composizione delle pagine, curiamo ogni dettaglio per creare esperienze di lettura ottimali.",
    benefits: [
      "Design di riviste, brochure e cataloghi",
      "Layout intuitivi e gerarchie visive efficaci",
      "Selezione tipografica accurata e studiata",
      "Equilibrio perfetto tra testo e immagini"
    ],
    imageUrl: "/images/editorial.webp",
    icon: BookOpen,
    metrics: {
      creativeFocus: "Altissima",
      technicalComplexity: "Alta",
      deliveryTime: "Medio",
      strategicImpact: "Medio"
    }
  },
  {
    title: "Packaging Design",
    description: "Creiamo packaging che non sono solo contenitori, ma vere e proprie esperienze di marca. Progettiamo soluzioni che combinano estetica, funzionalità e storytelling per distinguerti sugli scaffali e creare un legame emotivo con i consumatori.",
    benefits: [
      "Design di packaging distintivi e memorabili",
      "Soluzioni che bilanciano estetica e funzionalità",
      "Esperienza di unboxing coinvolgente",
      "Coerenza con l'identità di marca"
    ],
    imageUrl: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: Package,
    metrics: {
      creativeFocus: "Altissima",
      technicalComplexity: "Alta",
      deliveryTime: "Medio",
      strategicImpact: "Elevato"
    }
  },
  {
    title: "Siti Web",
    description: "Realizziamo siti web responsive, intuitivi e coinvolgenti che rappresentano al meglio la tua attività online. Dalla struttura all'esperienza utente, sviluppiamo piattaforme digitali che non solo attraggono visitatori, ma li convertono in clienti.",
    benefits: [
      "Design responsive ottimizzato per tutti i dispositivi",
      "Interfacce intuitive centrate sull'utente",
      "Tempi di caricamento veloci e ottimizzazione SEO",
      "Integrazioni con sistemi di e-commerce e CRM"
    ],
    imageUrl: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: Globe,
    metrics: {
      creativeFocus: "Media",
      technicalComplexity: "Altissima",
      deliveryTime: "Rapido",
      strategicImpact: "Altissimo"
    }
  },
  {
    title: "Social Media",
    description: "Gestiamo la tua presenza sui social media con contenuti creativi e strategie mirate per aumentare engagement, visibilità e conversioni. Creiamo un ecosistema digitale coerente che rafforza la tua identità di marca e costruisce relazioni durature con il tuo pubblico.",
    benefits: [
      "Strategie personalizzate per ogni piattaforma",
      "Contenuti visivi di qualità e coinvolgenti",
      "Pianificazione editoriale strategica",
      "Monitoraggio e analisi delle performance"
    ],
    imageUrl: "https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: Instagram,
    metrics: {
      creativeFocus: "Alta",
      technicalComplexity: "Media",
      deliveryTime: "Continuo",
      strategicImpact: "Elevato"
    }
  }
];

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      {/* Hero Section with Dynamic Gradient */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] z-0"></div>
        
        <div className="container relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Cosa Facciamo
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6 text-5xl lg:text-7xl font-heading"
          >
            I nostri <span className="italic font-light text-light/70">servizi</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Soluzioni creative su misura per far crescere il tuo brand e comunicare in modo straordinariamente efficace con il tuo pubblico.
          </motion.p>
        </div>
      </section>

      {/* Interactive Service Explorer */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark-100 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Service Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveService(i)}
                    whileHover={{ x: 10 }}
                    className={`
                      flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border
                      ${activeService === i 
                        ? 'bg-accent/10 border-accent/50 text-white shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                        : 'bg-dark/40 border-light/10 text-light/50 hover:border-accent/30 hover:text-light/80'}
                    `}
                  >
                    <div className={`p-2 rounded-md ${activeService === i ? 'bg-accent text-dark' : 'bg-dark-200 text-accent'}`}>
                      <Icon size={20} />
                    </div>
                    <span className="font-medium">{service.title}</span>
                    {activeService === i && (
                      <motion.div 
                        layoutId="active-pill"
                        className="ml-auto"
                      >
                        <ArrowRight size={16} className="text-accent" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Service Content Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 lg:p-12 rounded-2xl border border-light/10 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-white text-4xl font-heading mb-6 leading-tight">
                        {services[activeService].title}
                      </h3>
                      <p className="text-light/60 font-light text-lg leading-relaxed mb-8">
                        {services[activeService].description}
                      </p>
                      
                      <ul className="space-y-4 mb-10">
                        {services[activeService].benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                              <Check size={12} className="text-accent" />
                            </div>
                            <span className="text-light/70 font-light">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to="/contatti" className="btn btn-outline inline-flex items-center gap-2">
                        Richiedi un preventivo <ArrowRight size={16} />
                      </Link>
                    </div>
                    
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-xl bg-dark-200 border border-light/10 aspect-[4/3] shadow-2xl">
                        <motion.img 
                          key={services[activeService].imageUrl}
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.8 }}
                          transition={{ duration: 0.6 }}
                          src={services[activeService].imageUrl} 
                          alt={services[activeService].title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-dark/60 backdrop-blur-md border border-light/20 rounded-lg flex items-center justify-center text-accent">
                          {React.createElement(services[activeService].icon, { size: 24 })}
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 blur-2xl rounded-full -z-10"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Metrics Section */}
      <section className="py-20 bg-dark-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-heading mb-4">Analisi del Valore</h2>
            <p className="text-light/60 max-w-2xl mx-auto font-light">
              Ogni nostro servizio è progettato per massimizzare l'impatto sul tuo business. Ecco come bilanciamo creatività e strategia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Target, label: "Precisione Strategica", value: "100%", desc: "Analisi mirata del target" },
              { icon: Zap, label: "Efficienza Creativa", value: "Fast", desc: "Tempi di risposta rapidi" },
              { icon: TrendingUp, label: "Crescita Brand", value: "High", desc: "Aumento visibilità" },
              { icon: ShieldCheck, label: "Qualità Garantita", value: "Top", desc: "Standard professionali" },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-light/10 text-center group hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent group-hover:scale-110 transition-transform">
                  <metric.icon size={24} />
                </div>
                <div className="text-white text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-accent text-sm font-medium mb-2">{metric.label}</div>
                <div className="text-light/50 text-xs font-light">{metric.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Service Matrix Table */}
          <div className="overflow-x-auto glass-panel rounded-2xl border border-light/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark/50">
                  <th className="p-6 text-white font-medium border-b border-light/10">Servizio</th>
                  <th className="p-6 text-white font-medium border-b border-light/10">Focus Creativo</th>
                  <th className="p-6 text-white font-medium border-b border-light/10">Complessità Tecnica</th>
                  <th className="p-6 text-white font-medium border-b border-light/10">Tempi di Consegna</th>
                  <th className="p-6 text-white font-medium border-b border-light/10">Impatto Strategico</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <tr key={i} className="border-b border-light/5 hover:bg-accent/5 transition-colors group">
                    <td className="p-6 text-light font-medium group-hover:text-white transition-colors">
                      {service.title}
                    </td>
                    <td className="p-6 text-light/60 font-light">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        service.metrics.creativeFocus === 'Altissima' ? 'bg-accent/20 text-accent' : 'bg-light/10 text-light/70'
                      }`}>
                        {service.metrics.creativeFocus}
                      </span>
                    </td>
                    <td className="p-6 text-light/60 font-light">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        service.metrics.technicalComplexity === 'Altissima' ? 'bg-accent/20 text-accent' : 'bg-light/10 text-light/70'
                      }`}>
                        {service.metrics.technicalComplexity}
                      </span>
                    </td>
                    <td className="p-6 text-light/60 font-light">
                      {service.title === "Siti Web" ? (
                        <motion.span 
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-accent font-bold"
                        >
                          {service.metrics.deliveryTime}
                        </motion.span>
                      ) : (
                        service.metrics.deliveryTime
                      )}
                    </td>
                    <td className="p-6 text-light/60 font-light">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        service.metrics.strategicImpact === 'Altissimo' ? 'bg-accent/20 text-accent' : 'bg-light/10 text-light/70'
                      }`}>
                        {service.metrics.strategicImpact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
